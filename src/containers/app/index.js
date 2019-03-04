import { connect } from "react-redux";
import { actions } from "../../reducers/madlibs";

import App from "../../components/app";

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    updateFieldTemplate: (payload) =>
      dispatch(actions.updateFieldTemplate(payload)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
