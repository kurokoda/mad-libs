import React from "react";
import PropTypes from "prop-types";

const ResultView = (props) => {
  const { onButtonClick } = props;

  return (
    <div className="container">
      <div className="content">
        <div className="section section--centered section--gray">
          <div className="result-section">
            <h3 className="section-label">About Me</h3>
            <div className="result-text">
              Foo fooberty foo foo monkeybutt Foo fooberty foo foo monkeybutt
              Foo fooberty foo foo monkeybutt Foo fooberty foo foo monkeybutt
              Foo fooberty foo foo monkeybutt Foo fooberty foo foo monkeybutt
              Foo fooberty foo foo monkeybutt
            </div>
            <button
              className="nav-button"
              data-target-view="input"
              onClick={onButtonClick}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ResultView.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default ResultView;
