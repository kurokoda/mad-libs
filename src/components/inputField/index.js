import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

const InputField = ({label}) => (
  <div className="input-field__container">
    <p className="input-field__label">{label}</p>
    <input className="input-field__input"></input>
  </div>
);

InputField.propTypes = {};

export default InputField;
