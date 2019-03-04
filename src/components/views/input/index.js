import React from "react";
import { COPY } from "../../../constants";
import TextInput from "./textInput";
import PropTypes from "prop-types";

const InputView = (props) => {
  const {
    allFieldsComplete,
    fields,
    getResults,
    onBlur,
    onButtonClick,
  } = props;

  const getCopy = (index) => {
    return COPY[fields[index]];
  };

  return (
    <div className="container">
      <div className="content">
        <div className="section section--gray">
          <h3 className="section-label">About Me</h3>
          {fields.map((field, index) => (
            <TextInput
              key={`input-field-${field}`}
              field={field}
              label={getCopy(index)}
              onBlur={onBlur}
            />
          ))}
        </div>
        <div className="section">
          <h3 className="section-label">Your Essay Test</h3>
          <div className="result-text" dangerouslySetInnerHTML={{__html:getResults()}}/>
          {allFieldsComplete && (
            <button
              className="button--nav"
              data-target-view="result"
              onClick={onButtonClick}
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

InputView.propTypes = {
  allFieldsComplete: PropTypes.bool.isRequired,
  fields: PropTypes.array.isRequired,
  getResults: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default InputView;
