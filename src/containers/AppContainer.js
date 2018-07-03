import { connect } from 'react-redux';
import App from 'components/App';

function mapStateToProps(state) {
  const { users } = state;
  return {
    selectedUser: users.selectedUser,
  };
}
const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;
