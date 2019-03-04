import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.scss";

class InputField extends Component {
  state = {
    value: "",
  };

  componentDidMount() {
    const { value } = this.props;
    this.setState({ inputTextValue: value });
  }

  render() {
    const { field, label, onBlur } = this.props;
    const { value } = this.state;

    return (
      <div className="input-field__container">
        <p className="input-field__label">{label}</p>
        <input
          className="input-field__input"
          data-field={field}
          onBlur={onBlur}
          onChange={this.onChange}
          value={value}
        />
      </div>
    );
  }

  onChange = (event) => {
    this.setState({ value: event.target.value });
  };
}

InputField.propTypes = {};

export default InputField;
