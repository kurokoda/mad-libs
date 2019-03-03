import React from "react";
import PropTypes from "prop-types";
import "./index.scss";
import InputView from "../views/input";

const App = (props) => {
  const { fieldOrder } = props;
  const keys = fieldOrder;

  const onBlur = () => {

  }

  return (
    <div className="application__container">
      <InputView keys={keys} onBlur={onBlur}/>
    </div>
  );
};

App.propTypes = {};

export default App;
