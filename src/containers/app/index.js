import { connect } from "react-redux";
import { actions } from "../../reducers/app";

import App from "../../components/app";

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    updateFieldTemplate: (payload) =>
      dispatch(actions.updateFieldTemplate(payload)),
    updateCurrentView: (payload) =>
      dispatch(actions.updateCurrentView(payload)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
