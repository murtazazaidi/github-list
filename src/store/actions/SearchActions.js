import searchUser from 'sources/SearchSource';

import {
  SEARCH_USER_INIT,
  SEARCH_MORE_USER_INIT,
  SEARCH_USER_SUCCESS,
  SEARCH_USER_FAILED,
  CLEAR_SEARCH,
} from 'action-labels/searchLabels';

// normal actions
export const searchUserInit = userSearchTerm => ({
  type: SEARCH_USER_INIT,
  data: userSearchTerm,
});

export const searchMoreUserInit = userSearchTerm => ({
  type: SEARCH_MORE_USER_INIT,
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

export const clearSearchAction = () => ({
  type: CLEAR_SEARCH,
});

// Async Action
export const searchUserAction = (query, pageNo) => searchUser(query, pageNo);
