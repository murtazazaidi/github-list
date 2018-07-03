import { combineReducers } from 'redux';
import searchReducer from 'store/reducers/searchReducer';
import userReducer from 'store/reducers/userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  search: searchReducer,

});

export default rootReducer;
