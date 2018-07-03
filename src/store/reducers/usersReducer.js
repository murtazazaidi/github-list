/* eslint-disable no-param-reassign */
import * as userLabels from 'action-labels/userLabels';
import * as repoLabels from 'action-labels/repoLabels';

const initialState = {
  userSearchTerm: '',
  usersList: [],
  totalCount: 0,
  isSearchingUser: false,
  selectedUser: null,
  selectedUserRepos: null,
  selectedUserRepoCount: 0,
  isLoadingUserRepos: false,
  fetchedSelectedUserRepo: false,
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case userLabels.CLEAR_SEARCH: {
      state = Object.assign({}, initialState);
      return state;
    }
    case userLabels.SEARCH_USER_INIT: {
      state = Object.assign({}, initialState, {
        isSearchingUser: true,
        userSearchTerm: action.data,
      });
      return state;
    }
    case userLabels.SEARCH_USER_SUCCESS: {
      const { usersList, totalCount } = action.data;
      state = Object.assign({}, state, { usersList, totalCount, isSearchingUser: false });
      return state;
    }
    case userLabels.SEARCH_USER_FAILED: {
      state = Object.assign({}, initialState, { isSearchingUser: false });
      return state;
    }
    case userLabels.UPDATE_SELECTED_USER: {
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
    case repoLabels.FETCH_USER_REPOS_INIT: {
      state = Object.assign({}, state, {
        iselectedUserRepos: null,
        selectedUserRepoCount: 0,
        isLoadingUserRepos: true,
        fetchedSelectedUserRepo: false,
      });
      return state;
    }
    case repoLabels.FETCH_USER_REPOS_SUCCESS: {
      const reposList = action.data;
      state = Object.assign({}, state, {
        selectedUserRepos: reposList,
        selectedUserRepoCount: reposList.length,
        isLoadingUserRepos: false,
        fetchedSelectedUserRepo: true,
      });
      return state;
    }
    case repoLabels.FETCH_USER_REPOS_FAILED: {
      state = Object.assign({}, state, {
        iselectedUserRepos: null,
        selectedUserRepoCount: 0,
        isLoadingUserRepos: false,
        fetchedSelectedUserRepo: false,
      });
      return state;
    }

    default:
      return state;
  }
}
