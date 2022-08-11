import React, { ReactElement } from "react";
import EventTypeInTile from "../EventTypeInTile/EventTypeInTile";
import { getFinalTotalEmptyAndFilledCellsInCurrentMonth } from "../../utils/CalendarCalculations";
import "./AllDayNumbersOfTheWeek.css";

interface AllDayNumbersOfTheWeekProps {
  selectedMonth: string;
  widthDimension: Number;
  triggerEventDetailsPopup: Function;
  renderConditionalClasses: Function;
}

const AllDayNumbersOfTheWeek: React.FC<AllDayNumbersOfTheWeekProps> = ({
  selectedMonth,
  widthDimension,
  triggerEventDetailsPopup,
  renderConditionalClasses,
}): ReactElement => {
  return (
    <>
      <div className="calendar-day-numbers">
        {getFinalTotalEmptyAndFilledCellsInCurrentMonth(
          `${selectedMonth} 1, 2022`,
          selectedMonth
        ).map((day: any, index: Number) => {
          return (
            <div
              key={`day-number-tile-${index}`}
              onClick={() => triggerEventDetailsPopup(day)}
              className={`calendar-day-numbers__day-number${renderConditionalClasses(
                day
              )}`}
            >
              <div className="calendar-day-numbers__day-number--number">
                {day}
              </div>
              <EventTypeInTile
                day={day}
                widthDimension={widthDimension}
                selectedMonth={selectedMonth}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AllDayNumbersOfTheWeek;
