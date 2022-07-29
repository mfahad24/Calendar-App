//react imports
import React, { useState, useEffect, ReactElement } from "react";
//all component imports
import MonthName from "../MonthName/MonthName";
import EventDetails from "../EventDetails/EventDetails";
import AllDaysOfTheWeek from "../AllDaysOfTheWeek/AllDaysOfTheWeek";
import EventTypeInTile from "../EventTypeInTile/EventTypeInTile";
import AllMonthButtons from "../AllMonthButtons/AllMonthButtons";

//util/data imports
import {
  getAllEmptyAndFilledCellsInCurrentMonth,
  getCurrentDayNumber,
} from "../../utils/CalendarCalculations";
import allEvents from "../../data/AllEvents";

//css imports
import "./Calendar.css";

const Calendar: React.FC = (): ReactElement => {
  const [allScheduledDayNumbers, setAllScheduledDayNumbers] = useState<
    Number[]
  >([]);
  const [showEventDetails, setShowEventDetails] = useState<boolean>(false);
  const [clickedDayNumber, setClickedDayNumber] = useState<Number>(0);
  const [widthDimension, setWidthDimension] = useState<Number>(
    window.innerWidth
  );

  useEffect(() => {
    function handleResize() {
      setWidthDimension(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    allEvents.map((event) => {
      let eventDayNumber = Number(
        event.date
          .split("")
          .slice(3, 5)
          .join("")
      );
      setAllScheduledDayNumbers((prev) => [...prev, eventDayNumber]);
    });
  }, []);

  const triggerEventDetailsPopup = (currentDayNumber: Number) => {
    setClickedDayNumber(currentDayNumber);
    setShowEventDetails(true);
  };

  const renderConditionalClasses = (day: Number) => {
    if (allScheduledDayNumbers.includes(day))
      return " calendar-day-numbers__day-number--scheduled";
    if (getCurrentDayNumber() === day)
      return " calendar-day-numbers__day-number--today";
    if (day === 0)
      return " calendar-day-numbers__day-number--not-a-true-day-number";
    return "";
  };

  return (
    <>
      {showEventDetails && (
        <EventDetails
          clickedDayNumber={clickedDayNumber}
          setShowEventDetails={setShowEventDetails}
        />
      )}
      <div className="calendar-container">
        <MonthName />
        <AllDaysOfTheWeek widthDimension={widthDimension} />
        <div className="calendar-day-numbers">
          {getAllEmptyAndFilledCellsInCurrentMonth().map(
            (day: any, index: Number) => {
              return (
                <div
                  key={`day-number-tile-${index}`}
                  onClick={() => triggerEventDetailsPopup(day)}
                  className={`calendar-day-numbers__day-number${renderConditionalClasses(
                    day
                  )}`}
                >
                  <div>{day}</div>
                  <EventTypeInTile day={day} widthDimension={widthDimension} />
                </div>
              );
            }
          )}
        </div>
        <AllMonthButtons />
      </div>
    </>
  );
};

export default Calendar;
