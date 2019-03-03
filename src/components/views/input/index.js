import React from "react";
import PropTypes from "prop-types";
import "./index.scss";
import { COPY } from "../../../constants";
import InputField from "./inputField";

const InputView = (props) => {
  const { keys, onBlur } = props;

  const getCopy = (index) => {
    return COPY[keys[index]];
  };

  const InputFields = () =>
      keys.map((key, index) => (
      <InputField
        key={`input-field-${key}`}
        id={key}
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
