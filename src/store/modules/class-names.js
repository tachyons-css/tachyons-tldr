import R from 'ramda';
import { CLASS_NAMES } from '../mutation-types';
import { groupedClasses } from '../../api/styles';
import * as utils from './utils';

/**
 * initial state
 */
const classNamesState = {
  query: null,
  groups: {},
};


/**
 * Getters
 */
const getters = {
  searchResults: ({ groups, query }) => {
    const name = R.unless(
      R.either(R.isNil, R.isEmpty),
      utils.findGroup,
    )(query);

    return groups[name] ? utils.groupClasses(groups[name]) : [];
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
