import React from "react";
import PropTypes from "prop-types";
import "./index.scss";
import InputView from "../views/input";
import { getTextTemplate } from "../../constants"

const App = (props) => {
  const { fieldOrder, fieldValues, updateFieldTemplate } = props;
  const fields = fieldOrder;

  console.log(props);

  const getString = (field, value) => {
    const templateList = getTextTemplate(field);
    const template = templateList[Math.floor(Math.random()*templateList.length)];
    value = template.indexOf('$answer') === 0 ? value.charAt(0).toUpperCase() : value;
    return template.replace('$answer', value);
  }

  const onBlur = (event) => {
    const field = event.target.dataset.field;
    const value = event.target.value;
    const result = getString(field, value);
    updateFieldTemplate({field, result})
  }

  return (
    <div className="application__container">
      <InputView fields={fields} fieldValues={fieldValues} onBlur={onBlur}/>
    </div>
  );
};

App.propTypes = {};

export default App;
