/* eslint-disable no-param-reassign */
import * as searchLabels from 'action-labels/searchLabels';

const initialState = {
  userSearchTerm: '',
  usersList: [],
  totalCount: 0,
  isSearchingUser: false,
  pageNo: 1,
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case searchLabels.CLEAR_SEARCH: {
      state = Object.assign({}, initialState);
      return state;
    }
    case searchLabels.SEARCH_USER_INIT: {
      state = Object.assign({}, initialState, {
        isSearchingUser: true,
        userSearchTerm: action.data,
      });
      return state;
    }
    case searchLabels.SEARCH_MORE_USER_INIT: {
      state = Object.assign({}, state, {
        isSearchingUser: true,
        userSearchTerm: action.data,
      });
      return state;
    }
    case searchLabels.SEARCH_USER_SUCCESS: {
      const { usersList, totalCount, pageNo } = action.data;
      const updatedList = state.usersList.concat(usersList);
      state = Object.assign({}, state, {
        pageNo,
        totalCount,
        usersList: updatedList,
        isSearchingUser: false,
      });
      return state;
    }
    case searchLabels.SEARCH_USER_FAILED: {
      state = Object.assign({}, state, { isSearchingUser: false });
      return state;
    }

    default:
      return state;
  }
}
