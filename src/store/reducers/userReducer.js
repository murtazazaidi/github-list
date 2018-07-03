/* eslint-disable no-param-reassign */
import * as userLabels from 'action-labels/userLabels';
import * as repoLabels from 'action-labels/repoLabels';

const initialState = {
  selectedUser: null,
  selectedUserRepos: null,
  selectedUserRepoCount: 0,
  isLoadingUserRepos: false,
  fetchedSelectedUserRepo: false,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
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
