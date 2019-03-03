import React from "react";
import PropTypes from "prop-types";
import "./index.scss";
import { COPY } from "../../../constants";
import InputField from "./inputField";

const InputView = (props) => {
  const { fields, onBlur } = props;

  const getCopy = (index) => {
    return COPY[fields[index]];
  };

  const InputFields = () =>
      fields.map((field, index) => (
      <InputField
        key={`input-field-${field}`}
        field={field}
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

InputView.propTypes = {};

export default InputView;
