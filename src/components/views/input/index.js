import React from "react";
import { COPY } from "../../../constants";
import "./index.scss";
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
    <div className="madlibs__container">
      <div className="madlibs__content">
        <div className="madlibs__section madlibs__section--gray">
          <h3 className="madlibs__section-label">About Me</h3>
          {fields.map((field, index) => (
            <InputField
              key={`input-field-${field}`}
              field={field}
              label={getCopy(index)}
              onBlur={onBlur}
            />
          ))}
        </div>
        <div className="madlibs__section">
          <h3 className="madlibs__section-label">Your Essay Test</h3>
          <div className="madlibs__results">
          {getResults()}
          </div>
          {allFieldsComplete && (
              <button className="madlibs__button" data-target-view="result" onClick={onButtonClick}>Edit</button>
          )}
        </div>
      </div>
    </div>
  );
};

InputView.propTypes = {};

export default InputView;
