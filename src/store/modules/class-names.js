import R, { __ } from 'ramda';
import { propNamesList, cssObj } from '../../api';
import * as utils from '../../utils';

export const findByPartialMatch = query => R.compose(
  R.find(
    R.pipe(R.toLower, R.invoker(1, 'includes')(query)),
  ),
  R.values,
)(propNamesList);

export const findGroup = R.converge(R.or, [
  R.compose(
    R.prop(__, propNamesList),
    R.toLower,
  ),
  findByPartialMatch,
]);

const parseBaseSelector = R.compose(R.nth(1), R.match(utils.mediaQueryRegex));

const groupByClassName = R.groupBy(
  R.ifElse(R.test(utils.mediaQueryRegex),
    parseBaseSelector,
    R.identity,
  ),
);

export const groupClasses = R.compose(
  R.values,
  R.mapObjIndexed((mqNames, className) => ({
    name: className,
    value: cssObj[className],
    mqNames,
  })),
  R.map(R.tail),
  groupByClassName,
);

const isNilOrEmpty = R.either(R.isNil, R.isEmpty);

function findByProperty(query, classGroups) {
  const name = R.unless(
    isNilOrEmpty,
    findGroup,
  )(query);

  return classGroups[name] ? groupClasses(classGroups[name]) : [];
}

const byClassName = R.ifElse(R.isEmpty,
  R.always(/notValidClass/),
  query => new RegExp(query, 'ig')
);

const findByClassName = query => R.compose(
  R.map(utils.renameKeys({
    0: 'name',
    1: 'value',
  })),
  R.filter(
    R.compose(
      R.test(byClassName(query)),
      R.head,
    ),
  ),
  R.toPairs,
);

/**
 * initial state
 */
const classNamesState = {
  query: null,
  byClassName: false,
};


/**
 * Getters
 */
const getters = {
  searchResults: (
    { query = '' },
    _,
    { tachyons: { classGroups, classNames }, ui }
  ) => {
    if (ui.terminal.byClassName) {
      return findByClassName(query)(classNames);
    }

    return findByProperty(query, classGroups);
  },
  query: ({ query }) => query,
};


/**
 * Actions
 */
const actions = {
};


/**
 * Mutations
 */
const mutations = {
  searchForClassByProp(state, { query }) {
    state.query = query;
  },
};


export default {
  state: classNamesState,
  getters,
  actions,
  mutations,
};
