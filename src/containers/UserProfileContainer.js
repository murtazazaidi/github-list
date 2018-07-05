import { connect } from 'react-redux';

import UserProfile from 'components/UserProfile';

import { fetchUserAction } from 'store/actions/UserActions';
import { fetchUserReposAction } from 'store/actions/RepoActions';

function mapStateToProps(state) {
  const { user } = state;
  return {
    selectedUser: user.selectedUser,
    isLoadingUser: user.isLoadingUser,
    fetchedSelectedUser: user.fetchedSelectedUser,
    isLoadingUserRepos: user.isLoadingUserRepos,
    fetchedSelectedUserReposOnce: user.fetchedSelectedUserReposOnce,
    selectedUserRepos: user.selectedUserRepos,
    selectedUserRepoCount: user.selectedUserRepoCount,
    pageNo: user.pageNo,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUser: username => dispatch(fetchUserAction(username)),
    fetchUserRepos: (reposUrl, pageNo) => dispatch(fetchUserReposAction(reposUrl, pageNo)),
  };
}

const UserProfileContainer = connect(mapStateToProps, mapDispatchToProps)(UserProfile);

export default UserProfileContainer;
