import { connect } from "react-redux";
import { actions } from "../../reducers/app";

import App from "../../components/app";

function mapStateToProps({
  allFieldsComplete,
  currentView,
  fieldOrder,
  fieldResults,
  resetApplication,
  updateFieldTemplate,
  updateCurrentView,
}) {
  return {
    allFieldsComplete,
    currentView,
    fieldOrder,
    fieldResults,
    resetApplication,
    updateFieldTemplate,
    updateCurrentView,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    resetApplication: () => dispatch(actions.resetApplication()),
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
