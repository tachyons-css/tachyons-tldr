import R from 'ramda';
// import { CLASS_NAMES } from '../mutation-types';
import * as utils from './utils';

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
  searchResults: ({ query }, _, { tachyons: { classGroups } }) => {
    const name = R.unless(
      R.either(R.isNil, R.isEmpty),
      utils.findGroup,
    )(query);

    return classGroups[name] ? utils.groupClasses(classGroups[name]) : [];
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
/* eslint-disable no-param-reassign */
const mutations = {
  searchForClassByProp(state, { query }) {
    state.query = query;
  },

  // parseClasses(state) {
  //   state.groups = groupedClasses;
  // },
};
/* eslint-enable no-param-reassign */


export default {
  state: classNamesState,
  getters,
  actions,
  mutations,
};
