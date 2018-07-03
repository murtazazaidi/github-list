import { connect } from 'react-redux';

import UserSearch from 'components/UserSearch';

import {
  searchUserAction, clearSearchAction, updateSelectedUserAction,
} from 'store/actions/SearchActions';

function mapStateToProps(state) {
  const { users } = state;
  return {
    usersList: users.usersList,
    totalCount: users.totalCount,
    isSearchingUser: users.isSearchingUser,
    searchTerm: users.userSearchTerm,
    selectedUser: users.selectedUser,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    searchUser: query => dispatch(searchUserAction(query)),
    clearSearch: query => dispatch(clearSearchAction(query)),
    updateSelectedUser: user => dispatch(updateSelectedUserAction(user)),
  };
}

const UserSearchContainer = connect(mapStateToProps, mapDispatchToProps)(UserSearch);

export default UserSearchContainer;
