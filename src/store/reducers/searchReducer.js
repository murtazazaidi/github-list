/* eslint-disable no-param-reassign */
import * as searchLabels from 'action-labels/searchLabels';

const initialState = {
  userSearchTerm: '',
  usersList: [],
  totalCount: 0,
  isSearchingUser: false,
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case searchLabels.CLEAR_SEARCH: {
      state = Object.assign({}, initialState);
      return state;
    }
    case searchLabels.SEARCH_USER_INIT: {
      state = Object.assign({}, initialState, {
        isSearchingUser: true,
        userSearchTerm: action.data,
      });
      return state;
    }
    case searchLabels.SEARCH_USER_SUCCESS: {
      const { usersList, totalCount } = action.data;
      state = Object.assign({}, state, { usersList, totalCount, isSearchingUser: false });
      return state;
    }
    case searchLabels.SEARCH_USER_FAILED: {
      state = Object.assign({}, initialState, { isSearchingUser: false });
      return state;
    }
    case searchLabels.UPDATE_SELECTED_USER: {
      const selectedUser = action.data;
      state = Object.assign({}, state, {
        selectedUser,
        selectedUserRepos: null,
        isLoadingUserRepos: false,
        selectedUserRepoCount: 0,
        fetchedSelectedUserRepo: false,
      });
      return state;
    }

    default:
      return state;
  }
}
