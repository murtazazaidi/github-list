import { combineReducers } from 'redux';
import usersReducer from 'store/reducers/usersReducer';

const rootReducer = combineReducers({
  users: usersReducer,
});

export default rootReducer;
