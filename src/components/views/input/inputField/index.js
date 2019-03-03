import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

const InputField = ({field, label, onBlur }) => (
  <div className="input-field__container">
    <p className="input-field__label">{label}</p>
    <input className="input-field__input" data-field={field} onBlur={onBlur}></input>
  </div>
);

InputField.propTypes = {};

export default InputField;
