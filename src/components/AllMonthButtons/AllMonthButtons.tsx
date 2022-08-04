import React, { ReactElement } from "react";
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
  widthDimension,
}): ReactElement => {
  let currentMonth = selectedMonth.slice(0, 3);
  return (
    <>
      <div
        className={
          widthDimension > 448
            ? `all-month-buttons-container`
            : `all-monnths-button-container__hidden`
        }
      >
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
                  setSelectedMonth(month);
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
