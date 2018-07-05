import { connect } from 'react-redux';

import UserSearch from 'components/UserSearch';

import {
  searchUserAction, clearSearchAction,
} from 'store/actions/SearchActions';

import { updateSelectedUserAction } from 'store/actions/UserActions';

function mapStateToProps(state) {
  const { search, user } = state;
  return {
    usersList: search.usersList,
    totalCount: search.totalCount,
    isSearchingUser: search.isSearchingUser,
    searchTerm: search.userSearchTerm,
    pageNo: search.pageNo,
    selectedUser: user.selectedUser,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    searchUser: (query, pageNo) => dispatch(searchUserAction(query, pageNo)),
    clearSearch: query => dispatch(clearSearchAction(query)),
    updateSelectedUser: user => dispatch(updateSelectedUserAction(user)),
  };
}

const UserSearchContainer = connect(mapStateToProps, mapDispatchToProps)(UserSearch);

export default UserSearchContainer;
