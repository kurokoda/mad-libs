import React from "react";
import PropTypes from "prop-types";
import "./index.scss";
import InputView from "../views/input";

const App = (props) => {
  const { fieldOrder } = props;
  const inputFields = fieldOrder;

  const onBlur = () => {

  }

  return (
    <div className="application__container">
      <InputView inputFields={inputFields} onBlur={onBlur}/>
    </div>
  );
};

App.propTypes = {};

export default App;
