import React from "react";
import PropTypes from "prop-types";
import "./index.scss";
import InputField from "../inputField";

const App = () => (
  <div className="application__container">
    <div className="madlibs__container">
      <div className="madlibs__content">
        <div className="madlibs__section madlibs__section--gray">
          <InputField label="Question One"/>
          <InputField label="Question One"/>
          <InputField label="Question One"/>
          <InputField label="Question One"/>
          <InputField label="Question One"/>
        </div>
        <div className="madlibs__section">Right Side</div>
      </div>
    </div>
  </div>
);

App.propTypes = {};

export default App;
