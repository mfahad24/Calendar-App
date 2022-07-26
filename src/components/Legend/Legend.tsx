import React, { ReactElement } from "react";
import "./Legend.css";

const Legend: React.FC = (): ReactElement => {
  return (
    <>
      <div className="legend-container">
        <div className="legend-current-day-container">
          <div className="legend-current-day__color-indicator"></div>
          <div className="legend-current-day__text">Current Day</div>
        </div>
        <div className="legend-scheduled-container">
          <div className="legend-scheduled__color-indicator"></div>
          <div className="legend-scheduled__text">Scheduled Day</div>
        </div>
        <div className="legend-unscheduled-container">
          <div className="legend-unscheduled__color-indicator"></div>
          <div className="legend-unscheduled__text">Unscheduled Day</div>
        </div>
      </div>
    </>
  );
};

export default Legend;
