import fetchUserRepos from 'sources/RepoSource';
import {
  FETCH_USER_REPOS_INIT,
  FETCH_USER_REPOS_SUCCESS,
  FETCH_USER_REPOS_FAILED,
} from 'action-labels/repoLabels';


// normal actions
export const fetchUserReposInit = () => ({
  type: FETCH_USER_REPOS_INIT,
});

export const fetchUserReposSuccess = data => ({
  type: FETCH_USER_REPOS_SUCCESS,
  data,
});

export const fetchUserReposFailed = data => ({
  type: FETCH_USER_REPOS_FAILED,
  data,
});

export const fetchUserReposAction = (reposUrl, pageNo) => fetchUserRepos(reposUrl, pageNo);
