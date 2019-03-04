import React from "react";
import PropTypes from "prop-types";
import InputView from "../views/input";
import ResultView from "../views/result";

import { getTextTemplate } from "../../constants";

const App = (props) => {
  const {
    allFieldsComplete,
    currentView,
    fieldOrder,
    fieldResults,
    updateFieldTemplate,
    updateCurrentView,
  } = props;
  const fields = fieldOrder;

  const capitalizeString = (value) => {
    return value.substring(0, 1).toUpperCase() + value.substring(1);
  };

  const getTemplate = (field) => {
    const templateList = getTextTemplate(field);
    return templateList[Math.floor(Math.random() * templateList.length)];
  };

  const getTemplateString = (field, value) => {
    const template = getTemplate(field);
    value = template.indexOf("$answer") === 0 ? capitalizeString(value) : value;
    return template.replace("$answer", value);
  };

  const isInputView = currentView === "input";

  const isResultView = currentView === "result";

  const onBlur = (event) => {
    const field = event.target.dataset.field;
    const value = event.target.value;
    const result = value === "" ? null : getTemplateString(field, value);
    updateFieldTemplate({ field, result });
  };

  const onNavButtonClick = (event) => {
    const { targetView } = event.target.dataset;
    console.log(event.target.dataset.targetView);
    updateCurrentView({ targetView });
  };

  return (
    <div className="application">
      {isInputView && (
        <InputView
          allFieldsComplete={allFieldsComplete}
          fields={fields}
          fieldResults={fieldResults}
          onBlur={onBlur}
          onButtonClick={onNavButtonClick}
        />
      )}
      {isResultView && (
        <ResultView
          fields={fields}
          fieldResults={fieldResults}
          onButtonClick={onNavButtonClick}
        />
      )}
    </div>
  );
};

App.propTypes = {
  allFieldsComplete: PropTypes.bool.isRequired,
  currentView: PropTypes.string.isRequired,
  fieldOrder: PropTypes.array.isRequired,
  fieldResults: PropTypes.shape({}).isRequired,
  updateFieldTemplate: PropTypes.func.isRequired,
  updateCurrentView: PropTypes.func.isRequired,
};

export default App;
