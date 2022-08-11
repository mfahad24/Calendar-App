//react imports
import React, { useState, useEffect, ReactElement } from "react";
//all component imports
import MonthName from "../MonthName/MonthName";
import EventDetails from "../EventDetails/EventDetails";
import AllDaysOfTheWeek from "../AllDaysOfTheWeek/AllDaysOfTheWeek";
import AllDayNumbersOfTheWeek from "../AllDayNumbersOfTheWeek/AllDayNumbersOfTheWeek";
import AllMonthButtons from "../AllMonthButtons/AllMonthButtons";

//util/data imports
import {
  getFinalTotalEmptyAndFilledCellsInCurrentMonth,
  getCurrentDayNumber,
  getMonthName,
} from "../../utils/CalendarCalculations";
import { monthNames } from "../../constants/constants";
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
  const [selectedMonth, setSelectedMonth] = useState<string>("August");

  useEffect(() => {
    function handleResize() {
      setWidthDimension(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    allEvents.map((event) => {
      let eventDayMonth = Number(event.date.split("").slice(0, 2).join(""));
      let eventDayNumber = Number(event.date.split("").slice(3, 5).join(""));
      if (monthNames[eventDayMonth - 1] === selectedMonth) {
        setAllScheduledDayNumbers((prev) => [...prev, eventDayNumber]);
      }
    });
  }, []);

  const triggerEventDetailsPopup = (currentDayNumber: Number) => {
    setClickedDayNumber(currentDayNumber);
    setShowEventDetails(true);
  };

  const renderConditionalClasses = (day: Number) => {
    if (
      allScheduledDayNumbers.includes(day) &&
      selectedMonth === getMonthName()
    )
      return " calendar-day-numbers__day-number--scheduled";
    if (getCurrentDayNumber() === day && selectedMonth === getMonthName())
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
          selectedMonth={selectedMonth}
        />
      )}
      <div className="calendar-container">
        <MonthName selectedMonth={selectedMonth} />
        <AllDaysOfTheWeek widthDimension={widthDimension} />
        <AllDayNumbersOfTheWeek
          selectedMonth={selectedMonth}
          widthDimension={widthDimension}
          triggerEventDetailsPopup={triggerEventDetailsPopup}
          renderConditionalClasses={renderConditionalClasses}
        />
        <AllMonthButtons
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
          widthDimension={widthDimension}
        />
      </div>
    </>
  );
};

export default Calendar;
