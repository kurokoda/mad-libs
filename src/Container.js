import { connect } from "react-redux";
import { actions } from "./madlibs";

import App from "./components/App";

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
