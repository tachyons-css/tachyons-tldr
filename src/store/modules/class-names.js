import R, { __ } from 'ramda';
import { CLASS_NAMES } from '../mutation-types';
import { propNamesList, groupedClasses } from '../../api/styles';


/**
 * initial state
 */
const classNamesState = {
  query: null,
  groups: {},
};


const findGroup = R.compose(
  R.prop(__, propNamesList),
  R.toLower
);


/**
 * Getters
 */
const getters = {
  searchResult: ({ groups, query }) => {
    const name = R.unless(
      R.either(R.isNil, R.isEmpty),
      findGroup,
    )(query);

    return name ? { name, classes: groups[name] } : {};
  },
};


/**
 * Actions
 */
const actions = {
  searchForProp({ commit }, { query }) {
    commit(CLASS_NAMES.SEARCH, { query });
  },

  parseClasses({ commit }) {
    commit(CLASS_NAMES.PARSE, { groups: groupedClasses });
  },
};


/**
 * Mutations
 */
/* eslint-disable no-param-reassign */
const mutations = {
  [CLASS_NAMES.SEARCH]: (state, { query }) => {
    state.query = query;
  },

  [CLASS_NAMES.PARSE]: (state, { groups }) => {
    state.groups = groups;
  },
};
/* eslint-enable no-param-reassign */


export default {
  state: classNamesState,
  getters,
  actions,
  mutations,
};
