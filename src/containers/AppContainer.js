import { connect } from 'react-redux';
import App from 'components/App';

function mapStateToProps(state) {
  const { user } = state;
  return {
    selectedUser: user.selectedUser,
  };
}
const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;
