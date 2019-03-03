import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

const App = () => (
  <div className="application__container">
    <div className="madlibs__container">
      <div className="madlibs__content">
        <div className="section section--gray">Left Side</div>
        <div className="section">Right Side</div>
      </div>
    </div>
  </div>
);

App.propTypes = {};

export default App;
