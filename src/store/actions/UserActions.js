import fetchUser from 'sources/UserSource';
import {
  FETCH_USER_INIT,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILED,
  UPDATE_SELECTED_USER,
} from 'action-labels/userLabels';


// normal actions
export const fetchUserInit = userName => ({
  type: FETCH_USER_INIT,
  data: userName,
});

export const fetchUserSuccess = data => ({
  type: FETCH_USER_SUCCESS,
  data,
});

export const fetchUserFailed = data => ({
  type: FETCH_USER_FAILED,
  data,
});

export const updateSelectedUserAction = data => ({
  type: UPDATE_SELECTED_USER,
  data,
});

export const fetchUserAction = userName => fetchUser(userName);
