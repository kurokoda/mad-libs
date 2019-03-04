import React from "react";
import { COPY } from "../../../constants";
import InputField from "./inputField";

const InputView = (props) => {
  const { allFieldsComplete, fields, fieldResults, onBlur, onButtonClick } = props;

  const getCopy = (index) => {
    return COPY[fields[index]];
  };

  const getResults = () => {
    return fields.map((field) => fieldResults[field]).join(" ");
  };

  return (
    <div className="container">
      <div className="content">
        <div className="section section--gray">
          <h3 className="section-label">About Me</h3>
          {fields.map((field, index) => (
            <InputField
              key={`input-field-${field}`}
              field={field}
              label={getCopy(index)}
              onBlur={onBlur}
            />
          ))}
        </div>
        <div className="section">
          <h3 className="section-label">Your Essay Test</h3>
          <div className="results">
          {getResults()}
          </div>
          {allFieldsComplete && (
              <button className="nav-button" data-target-view="result" onClick={onButtonClick}>Edit</button>
          )}
        </div>
      </div>
    </div>
  );
};

InputView.propTypes = {};

export default InputView;
