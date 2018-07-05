import axios from 'axios';
import { notification } from 'antd';
import {
  searchUserInit,
  searchMoreUserInit,
  searchUserSuccess,
  searchUserFailed,
  clearSearchAction,
} from 'store/actions/SearchActions';

import { SEARCH_USER_URL } from 'config/urls';

import normalizeUsers from 'normalizers/searchUsersList';

const searchUser = (q, pageNo = 1) => ((dispatch) => {
  if (!q) {
    dispatch(clearSearchAction());
    return;
  }
  if (pageNo === 1) {
    dispatch(searchUserInit(q));
  } else {
    dispatch(searchMoreUserInit(q));
  }
  axios
    .get(SEARCH_USER_URL, {
      params: { q, page: pageNo },
      headers: { Accept: 'application/vnd.github.mercy-preview+json' },
      timeout: 10000,
    })
    .then((response) => {
      if (response.status === 200 && response.data) {
        const { items, total_count: totalCount } = response.data;
        const usersNormalized = normalizeUsers(items);
        dispatch(searchUserSuccess({
          usersList: usersNormalized,
          pageNo,
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
