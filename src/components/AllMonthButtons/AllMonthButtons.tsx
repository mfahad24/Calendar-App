import React, { ReactElement } from "react";
import {
  monthNames,
  firstDayOfTheMonth,
} from "../../utils/CalendarCalculations";
import "./AllMonthButtons.css";

const AllMonthButtons: React.FC = (): ReactElement => {
  return (
    <>
      <div className="all-month-buttons-container">
        {monthNames.map((month, index) => {
          return (
            <div
              key={`all-month-buttons__single-month${index}`}
              className="all-month-buttons__single-month"
            >
              <div
                className={`all-month-buttons__single-month--inactive-month ${
                  firstDayOfTheMonth.slice(0, 3) === month.slice(0, 3)
                    ? "all-month-buttons__single-month--active-month"
                    : ""
                }`}
              >
                {month.slice(0, 3)}
              </div>
              <div
                className={`all-month-buttons__single-month--inactive-circle ${
                  firstDayOfTheMonth.slice(0, 3) === month.slice(0, 3)
                    ? "all-month-buttons__single-month--active-circle"
                    : ""
                }`}
              ></div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AllMonthButtons;
