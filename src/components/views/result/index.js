import React from "react";
import "./index.scss";

const ResultView = (props) => {
  const { onButtonClick } = props;

  return (
    <div className="madlibs__container">
      <div className="madlibs__content">
        <div className="madlibs__section madlibs__section--gray">
          <h3 className="madlibs__section-label">About Me</h3>
          <button className="madlibs__button" data-target-view="input" onClick={onButtonClick}>Edit</button>
        </div>
      </div>
    </div>
  );
};

ResultView.propTypes = {};

export default ResultView;
