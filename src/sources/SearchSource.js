import axios from 'axios';
import { notification } from 'antd';
import {
  searchUserInit,
  searchUserSuccess,
  searchUserFailed,
  clearSearchAction,
} from 'store/actions/SearchActions';

import { SEARCH_USER_URL } from 'config/urls';

import normalizeUsers from 'normalizers/searchUsersList';

const searchUser = q => ((dispatch) => {
  if (!q) {
    dispatch(clearSearchAction());
    return;
  }
  dispatch(searchUserInit(q));
  axios
    .get(SEARCH_USER_URL, {
      params: { q },
      headers: { Accept: 'application/vnd.github.mercy-preview+json' },
      timeout: 10000,
    })
    .then((response) => {
      if (response.status === 200 && response.data) {
        const { items, total_count: totalCount } = response.data;
        const usersNormalized = normalizeUsers(items);
        dispatch(searchUserSuccess({
          usersList: usersNormalized,
          totalCount,
        }));
      } else {
        dispatch(searchUserFailed());
      }
    })
    .catch((error) => {
      notification.error({
        message: 'Search Failed',
        description: (error && error.message) || error,
      });
      dispatch(searchUserFailed());
    });
});

export default searchUser;
