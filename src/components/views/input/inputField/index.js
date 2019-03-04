import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.scss";

class InputField extends Component {
  state = {
    inputTextValue: ""
  }

  componentDidMount(){
    const { value } = this.props;
    this.setState({inputTextValue: value})
  }

  render() {
    const { field, label, onBlur } = this.props;
    const { inputTextValue } = this.state;
    console.log(inputTextValue)
    return (
      <div className="input-field__container">
        <p className="input-field__label">{label}</p>
        <input
          className="input-field__input"
          data-field={field}
          onBlur={this.onBlur}
          onChange={this.onChange}
          value={inputTextValue}
        />
      </div>
    );
  }

  onBlur = (event) => {
    const inputTextValue = event.target.value;
    this.setState({inputTextValue})
  }

  onChange = (event) => {
    const inputTextValue = event.target.value;
    this.setState({inputTextValue})
  }
}

InputField.propTypes = {};

export default InputField;
