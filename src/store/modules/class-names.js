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

function findByProperty(query, classGroups) {
  const name = R.unless(
    R.either(R.isNil, R.isEmpty),
    findGroup,
  )(query);

  return classGroups[name] ? groupClasses(classGroups[name]) : [];
}

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
  searchResults: ({ query }, _, { tachyons: { classGroups }, ui }) => {
    if (ui.terminal.byClassName) {
      return [];
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
