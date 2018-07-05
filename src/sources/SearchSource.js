import { notification } from 'antd';
import http from 'utils/httpUtils';
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
  http
    .get(SEARCH_USER_URL, {
      params: { q, page: pageNo },
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
