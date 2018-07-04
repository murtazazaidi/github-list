/* eslint-disable no-param-reassign */
import * as userLabels from 'action-labels/userLabels';
import * as repoLabels from 'action-labels/repoLabels';

const initialState = {
  selectedUser: null,
  isLoadingUser: false,
  fetchedSelectedUser: false,
  isLoadingUserRepos: false,
  fetchedSelectedUserRepos: false,
  selectedUserRepos: null,
  selectedUserRepoCount: 0,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case userLabels.UPDATE_SELECTED_USER: {
      const selectedUser = action.data;
      state = Object.assign({}, state, {
        selectedUser,
        isLoadingUser: false,
        isLoadingUserRepos: false,
        selectedUserRepos: null,
        selectedUserRepoCount: 0,
        fetchedSelectedUserRepos: false,
        fetchedSelectedUser: false,
      });
      return state;
    }
    case userLabels.FETCH_USER_INIT: {
      state = Object.assign({}, state, {
        isLoadingUser: true,
        fetchedSelectedUser: false,
      });
      return state;
    }
    case userLabels.FETCH_USER_SUCCESS: {
      const user = action.data;
      state = Object.assign({}, state, {
        selectedUser: user,
        isLoadingUser: false,
        fetchedSelectedUser: true,
      });
      return state;
    }
    case userLabels.FETCH_USER_FAILED: {
      state = Object.assign({}, state, {
        isLoadingUser: false,
        fetchedSelectedUser: false,
      });
      return state;
    }
    case repoLabels.FETCH_USER_REPOS_INIT: {
      state = Object.assign({}, state, {
        iselectedUserRepos: null,
        selectedUserRepoCount: 0,
        isLoadingUserRepos: true,
        fetchedSelectedUserRepos: false,
      });
      return state;
    }
    case repoLabels.FETCH_USER_REPOS_SUCCESS: {
      const reposList = action.data;
      state = Object.assign({}, state, {
        selectedUserRepos: reposList,
        selectedUserRepoCount: reposList.length,
        isLoadingUserRepos: false,
        fetchedSelectedUserRepos: true,
      });
      return state;
    }
    case repoLabels.FETCH_USER_REPOS_FAILED: {
      state = Object.assign({}, state, {
        iselectedUserRepos: null,
        selectedUserRepoCount: 0,
        isLoadingUserRepos: false,
        fetchedSelectedUserRepos: false,
      });
      return state;
    }

    default:
      return state;
  }
}
