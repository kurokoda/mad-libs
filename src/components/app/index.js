import React from "react";
import PropTypes from "prop-types";
import "./index.scss";
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
    updateCurrentView
  } = props;
  const fields = fieldOrder;

  const capitalizeString = (value) => {
    return value.substring(0, 1).toUpperCase() + value.substring(1);
  };

  const getTemplateString = (field, value) => {
    const templateList = getTextTemplate(field);
    const template =
      templateList[Math.floor(Math.random() * templateList.length)];
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
    updateCurrentView({targetView});
  }

  return (
    <div className="application__container">
      { isInputView && (
          <InputView
              allFieldsComplete={allFieldsComplete}
              fields={fields}
              fieldResults={fieldResults}
              onBlur={onBlur}
              onButtonClick={onNavButtonClick}
          />
      )}
      { isResultView && (
          <ResultView
              fieldResults={fieldResults}
              onButtonClick={onNavButtonClick}
          />
      )}
    </div>
  );
};

App.propTypes = {};

export default App;
