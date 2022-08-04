import React, { ReactElement } from "react";
import // firstDayOfTheMonthFullDate,
"../../utils/CalendarCalculations";
import { monthNames } from "../../constants/constants";
import "./AllMonthButtons.css";

interface AllMonthButtonsProps {
  selectedMonth: String;
  setSelectedMonth: Function;
  widthDimension: Number;
}

const AllMonthButtons: React.FC<AllMonthButtonsProps> = ({
  selectedMonth,
  setSelectedMonth,
}): ReactElement => {
  let currentMonth = selectedMonth.slice(0, 3);
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
                  currentMonth === month.slice(0, 3)
                    ? "all-month-buttons__single-month--active-month"
                    : ""
                }`}
              >
                {month.slice(0, 3)}
              </div>
              <div
                // temporarily disabling Jan - Jul since CalendarCals line 33 needs work
                onClick={() => {
                  index >= 7 && setSelectedMonth(month);
                }}
                className={`all-month-buttons__single-month--inactive-circle ${
                  currentMonth === month.slice(0, 3)
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
