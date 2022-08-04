import React, { ReactElement } from "react";
import { dayNamesOfTheWeek } from "../../constants/constants";
import "./AllDaysOfTheWeek.css";

interface AllDaysOfTheWeekProps {
  widthDimension: Number;
}

const AllDaysOfTheWeek: React.FC<AllDaysOfTheWeekProps> = ({
  widthDimension,
}): ReactElement => {
  return (
    <div className="calendar-days">
      {dayNamesOfTheWeek.map((singleDayName, index) => {
        return (
          <div
            key={`day-of-the-week${index}`}
            className="calendar-days__day-name"
          >
            {widthDimension <= 448
              ? singleDayName.split("").slice(0, 2)
              : singleDayName}
          </div>
        );
      })}
    </div>
  );
};

export default AllDaysOfTheWeek;
