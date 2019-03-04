import React from "react";
import PropTypes from "prop-types";

const ResultView = (props) => {
  const { fields, fieldResults, onButtonClick } = props;

  const getResults = () => {
    return fields.map((field) => fieldResults[field]).join(" ");
  };

  return (
    <div className="container">
      <div className="content">
        <div className="section section--centered section--gray">
          <div className="result-section">
            <h3 className="section-label">Your Essay Text</h3>
            <div className="result-text-container">
            <div className="result-text">{getResults()}</div>
            </div>
            <button
              className="button--nav"
              data-target-view="input"
              onClick={onButtonClick}
            >
              Start Over
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ResultView.propTypes = {
  fields: PropTypes.array.isRequired,
  fieldResults: PropTypes.shape({}).isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default ResultView;
