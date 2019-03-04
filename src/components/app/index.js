import React from "react";
import PropTypes from "prop-types";
import "./index.scss";
import InputView from "../views/input";
import { getTextTemplate } from "../../constants";

const App = (props) => {
  const { allFieldsComplete, fieldOrder, fieldResults, updateFieldTemplate } = props;
  const fields = fieldOrder;

  const capitalizeString = (value) => {
    return value.substring(0, 1).toUpperCase() + value.substring(1);
  };

  const getString = (field, value) => {
    const templateList = getTextTemplate(field);
    const template =
      templateList[Math.floor(Math.random() * templateList.length)];
    value = template.indexOf("$answer") === 0 ? capitalizeString(value) : value;
    return template.replace("$answer", value);
  };

  const onBlur = (event) => {
    const field = event.target.dataset.field;
    const value = event.target.value;
    const result = value === "" ? null : getString(field, value);
    updateFieldTemplate({ field, result });
  };

  return (
    <div className="application__container">
      <InputView allFieldsComplete={allFieldsComplete} fields={fields} fieldResults={fieldResults} onBlur={onBlur} />
    </div>
  );
};

App.propTypes = {};

export default App;
