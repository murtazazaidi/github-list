/* eslint-disable no-param-reassign */
import * as userLabels from 'action-labels/userLabels';
import * as repoLabels from 'action-labels/repoLabels';
import * as searchLabels from 'action-labels/searchLabels';

const initialState = {
  isLoadingUser: false,
  isLoadingUserRepos: false,
  fetchedSelectedUser: false,
  fetchedSelectedUserReposOnce: false,
  selectedUser: null,
  selectedUserRepos: [],
  selectedUserRepoCount: 0,
  pageNo: 1,
  pageSize: 30,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case searchLabels.CLEAR_SEARCH: {
      state = Object.assign({}, initialState);
      return state;
    }
    case userLabels.UPDATE_SELECTED_USER: {
      const selectedUser = action.data;
      state = Object.assign({}, state, {
        selectedUser,
        isLoadingUser: false,
        isLoadingUserRepos: false,
        pageNo: 1,
        pageSize: 30,
        selectedUserRepos: [],
        selectedUserRepoCount: 0,
        fetchedSelectedUser: false,
        fetchedSelectedUserReposOnce: false,
      });
      return state;
    }
    case userLabels.FETCH_USER_INIT: {
      state = Object.assign({}, state, {
        isLoadingUser: true,
        fetchedSelectedUser: false,
        selectedUserRepoCount: 0,
      });
      return state;
    }
    case userLabels.FETCH_USER_SUCCESS: {
      const user = action.data;
      state = Object.assign({}, state, {
        selectedUser: user,
        selectedUserRepoCount: user.publicRepos,
        isLoadingUser: false,
        fetchedSelectedUser: true,
      });
      return state;
    }
    case userLabels.FETCH_USER_FAILED: {
      state = Object.assign({}, state, {
        isLoadingUser: false,
        fetchedSelectedUser: false,
        selectedUserRepoCount: 0,
      });
      return state;
    }
    case repoLabels.FETCH_USER_REPOS_INIT: {
      state = Object.assign({}, state, {
        pageNo: 1,
        isLoadingUserRepos: true,
      });
      return state;
    }
    case repoLabels.FETCH_USER_REPOS_SUCCESS: {
      const { reposList, pageNo } = action.data;
      const updatedList = state.selectedUserRepos.concat(reposList);
      state = Object.assign({}, state, {
        pageNo,
        selectedUserRepos: updatedList,
        isLoadingUserRepos: false,
        fetchedSelectedUserReposOnce: true,
      });
      return state;
    }
    case repoLabels.FETCH_USER_REPOS_FAILED: {
      state = Object.assign({}, state, {
        isLoadingUserRepos: false,
      });
      return state;
    }

    default:
      return state;
  }
}
