import axios from 'axios';
import { notification } from 'antd';
import {
  fetchUserInit,
  fetchUserSuccess,
  fetchUserFailed,
} from 'store/actions/UserActions';

import normalizeUsers from 'normalizers/usersList';

import { USERS_URL } from 'config/urls';

const fetchUser = userName => ((dispatch) => {
  if (!userName) return;
  dispatch(fetchUserInit(userName));
  const url = `${USERS_URL}${userName}`;
  axios
    .get(url, {
      headers: { Accept: 'application/vnd.github.mercy-preview+json' },
      timeout: 10000,
    })
    .then((response) => {
      if (response.status === 200 && response.data) {
        const usersNormalized = normalizeUsers([response.data]);
        dispatch(fetchUserSuccess(usersNormalized[0]));
      } else {
        dispatch(fetchUserFailed());
      }
    })
    .catch((error) => {
      notification.error({
        message: 'Failed to load user',
        description: (error && error.message) || error,
      });
      dispatch(fetchUserFailed());
    });
});

export default fetchUser;
