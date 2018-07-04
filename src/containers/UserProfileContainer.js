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
    fetchedSelectedUserRepos: user.fetchedSelectedUserRepos,
    selectedUserRepos: user.selectedUserRepos,
    selectedUserRepoCount: user.selectedUserRepoCount,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUser: username => dispatch(fetchUserAction(username)),
    fetchUserRepos: reposUrl => dispatch(fetchUserReposAction(reposUrl)),
  };
}

const UserProfileContainer = connect(mapStateToProps, mapDispatchToProps)(UserProfile);

export default UserProfileContainer;
