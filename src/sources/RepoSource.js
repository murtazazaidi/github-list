import axios from 'axios';
import { notification } from 'antd';
import {
  fetchUserReposInit,
  fetchUserReposSuccess,
  fetchUserReposFailed,
} from 'store/actions/RepoActions';

import normalizeRepos from 'normalizers/reposList';

const fetchUserRepos = reposUrl => ((dispatch) => {
  dispatch(fetchUserReposInit());
  axios
    .get(reposUrl, {
      headers: { Accept: 'application/vnd.github.mercy-preview+json' },
      timeout: 10000,
    })
    .then((response) => {
      if (response.status === 200 && response.data) {
        const reposNormalized = normalizeRepos(response.data);
        dispatch(fetchUserReposSuccess(reposNormalized));
      } else {
        dispatch(fetchUserReposFailed());
      }
    })
    .catch((error) => {
      notification.error({
        message: 'Search Failed',
        description: (error && error.message) || error,
      });
      dispatch(fetchUserReposFailed());
    });
});

export default fetchUserRepos;
