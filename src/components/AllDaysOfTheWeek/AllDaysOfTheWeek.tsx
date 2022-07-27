import React, { ReactElement } from "react";
import getWidthDimensionsOfTheWindow from "../WindowWidthDimensions/WindowWidthDimensions";
import { dayNamesOfTheWeek } from "../../utils/CalendarCalculations";
import "./AllDaysOfTheWeek.css";

const AllDaysOfTheWeek: React.FC = (): ReactElement => {
  return (
    <div className="calendar-days">
      {dayNamesOfTheWeek.map((singleDayName, index) => {
        return (
          <div
            key={`day-of-the-week${index}`}
            className="calendar-days__day-name"
          >
            {getWidthDimensionsOfTheWindow() <= 480
              ? singleDayName.split("").slice(0, 2)
              : singleDayName}
          </div>
        );
      })}
    </div>
  );
};

export default AllDaysOfTheWeek;
