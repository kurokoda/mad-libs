import React from "react";
import PropTypes from "prop-types";
import "./index.scss";
import InputView from "../views/input";

const App = (props) => {
  const { fieldOrder } = props;
  const fields = fieldOrder;

  const onBlur = (event) => {
    console.log(event.target.dataset.field, event.target.value )
  }

  return (
    <div className="application__container">
      <InputView fields={fields} onBlur={onBlur}/>
    </div>
  );
};

App.propTypes = {};

export default App;
