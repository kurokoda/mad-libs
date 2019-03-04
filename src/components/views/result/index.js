import React from "react";
import PropTypes from "prop-types";

const ResultView = (props) => {
  const { getResults, onButtonClick } = props;

  return (
    <div className="container">
      <div className="content">
        <div className="section section--centered section--gray">
          <div className="result-section">
            <h3 className="section-label">Your Essay Text</h3>
            <div className="result-text-container">
              <div className="result-text" dangerouslySetInnerHTML={{__html:getResults()}}/>
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
