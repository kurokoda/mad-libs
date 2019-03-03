import React from "react";
import PropTypes from "prop-types";
import "./index.scss";
import InputView from "../views/input";

const App = (props) => {
  const { fieldOrder, updateFieldTemplate } = props;
  const fields = fieldOrder;

  const onBlur = (event) => {
    const field = event.target.dataset.field;
    const value = event.target.value;
    updateFieldTemplate({field, value})
  }

  return (
    <div className="application__container">
      <InputView fields={fields} onBlur={onBlur}/>
    </div>
  );
};

App.propTypes = {};

export default App;
