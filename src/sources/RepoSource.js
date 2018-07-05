import { notification } from 'antd';
import http from 'utils/httpUtils';
import {
  fetchUserReposInit,
  fetchUserReposSuccess,
  fetchUserReposFailed,
} from 'store/actions/RepoActions';

import normalizeRepos from 'normalizers/reposList';

const fetchUserRepos = (reposUrl, pageNo = 1) => ((dispatch) => {
  if (!reposUrl) {
    dispatch(fetchUserReposFailed());
    return;
  }
  dispatch(fetchUserReposInit());
  http
    .get(reposUrl, {
      params: { page: pageNo },
    })
    .then((response) => {
      if (response.status === 200 && response.data) {
        const reposList = normalizeRepos(response.data);
        dispatch(fetchUserReposSuccess({
          pageNo,
          reposList,
        }));
      } else {
        dispatch(fetchUserReposFailed());
      }
    })
    .catch((error) => {
      notification.error({
        message: 'Failed to load repositories',
        description: (error && error.message) || error,
      });
      dispatch(fetchUserReposFailed());
    });
});

export default fetchUserRepos;
