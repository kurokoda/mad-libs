import React from "react";
import PropTypes from "prop-types";
import "./index.scss";
import { COPY } from "../../../constants";
import InputField from "./inputField";

const App = (props) => {
  const { inputFields, onBlur } = props;

  const getCopy = (index) => {
    return COPY[inputFields[index]];
  };

  const InputFields = () =>
    inputFields.map((inputField, index) => (
      <InputField
        key={`input-field-${index}`}
        label={getCopy(index)}
        onBlur={onBlur}
      />
    ));

  return (
    <div className="madlibs__container">
      <div className="madlibs__content">
        <div className="madlibs__section madlibs__section--gray">
          <h3 className="madlibs__section-label">About Me</h3>
          <InputFields />
        </div>
        <div className="madlibs__section">
          <h3 className="madlibs__section-label">Your Essay Test</h3>
        </div>
      </div>
    </div>
  );
};

App.propTypes = {};

export default App;
