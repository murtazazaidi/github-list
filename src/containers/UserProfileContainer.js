import { connect } from 'react-redux';

import UserProfile from 'components/UserProfile';

import { fetchUserReposAction } from 'store/actions/RepoActions';

function mapStateToProps(state) {
  const { users } = state;
  return {
    selectedUser: users.selectedUser,
    isLoadingUserRepos: users.isLoadingUserRepos,
    selectedUserRepos: users.selectedUserRepos,
    selectedUserRepoCount: users.selectedUserRepoCount,
    fetchedSelectedUserRepo: users.fetchedSelectedUserRepo,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUserRepos: reposUrl => dispatch(fetchUserReposAction(reposUrl)),
  };
}

const UserProfileContainer = connect(mapStateToProps, mapDispatchToProps)(UserProfile);

export default UserProfileContainer;
