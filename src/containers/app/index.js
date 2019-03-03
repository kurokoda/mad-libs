import { connect } from "react-redux";
import { actions } from "../../reducers/madlibs";

import App from "../../components/app";

function mapStateToProps({madlibs}) {
  return {madlibs};
}

function mapDispatchToProps(dispatch) {
  return {
    incrementMadlibCounter: () => dispatch(actions.increment()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
