import searchUser from 'sources/UserSource';

import {
  SEARCH_USER_INIT,
  SEARCH_USER_SUCCESS,
  SEARCH_USER_FAILED,
  UPDATE_SELECTED_USER,
  CLEAR_SEARCH,
} from 'action-labels/userLabels';

// normal actions
export const searchUserInit = userSearchTerm => ({
  type: SEARCH_USER_INIT,
  data: userSearchTerm,
});

export const searchUserSuccess = data => ({
  type: SEARCH_USER_SUCCESS,
  data,
});

export const searchUserFailed = data => ({
  type: SEARCH_USER_FAILED,
  data,
});

export const updateSelectedUserAction = data => ({
  type: UPDATE_SELECTED_USER,
  data,
});

export const clearSearchAction = () => ({
  type: CLEAR_SEARCH,
});

// Async Action
export const searchUserAction = query => searchUser(query);
