//react imports
import React, { useState, useEffect, ReactElement } from "react";

//all component imports
import MonthName from "../MonthName/MonthName";
import EventDetails from "../EventDetails/EventDetails";
import AllDaysOfTheWeek from "../AllDaysOfTheWeek/AllDaysOfTheWeek";
import AllDayNumbersOfTheWeek from "../AllDayNumbersOfTheWeek/AllDayNumbersOfTheWeek";
import AllMonthButtons from "../AllMonthButtons/AllMonthButtons";
import PopupModal from "../PopupModal/PopupModal";

//util/data imports
import {
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
  const [popupModalVisible, setPopupModalVisible] = useState<boolean>(false);
  const [clickedDayNumber, setClickedDayNumber] = useState<Number>(0);
  const [widthDimension, setWidthDimension] = useState<Number>(
    window.innerWidth
  );
  const [selectedMonth, setSelectedMonth] = useState<string>("");

  useEffect(() => {
    setSelectedMonth(getMonthName()); //set current month on mount
    function handleResize() {
      setWidthDimension(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setAllScheduledDayNumbers([]); // reset all scheduled days array when changing months
    allEvents.forEach((event) => {
      let eventDayMonth = Number(event.date.split("").slice(0, 2).join(""));
      let eventDayNumber = Number(event.date.split("").slice(3, 5).join(""));
      if (monthNames[eventDayMonth - 1] === selectedMonth) {
        setAllScheduledDayNumbers((prev) => [...prev, eventDayNumber]);
      }
    });
  }, [selectedMonth]);

  const triggerEventDetailsPopup = (currentDayNumber: Number) => {
    setClickedDayNumber(currentDayNumber);
    setPopupModalVisible(true);
  };

  const renderConditionalClasses = (day: Number) => {
    if (allScheduledDayNumbers.includes(day))
      return " calendar-day-numbers__day-number--scheduled";
    if (getCurrentDayNumber() === day && selectedMonth === getMonthName())
      return " calendar-day-numbers__day-number--today";
    if (day === null)
      return " calendar-day-numbers__day-number--not-a-true-day-number";
    return "";
  };

  return (
    <>
      {popupModalVisible === true ? (
        <EventDetails
          clickedDayNumber={clickedDayNumber}
          setPopupModalVisible={setPopupModalVisible}
          selectedMonth={selectedMonth}
        />
      ) : null}
      <div className="calendar-container">
        <MonthName
          selectedMonth={selectedMonth}
          setPopupModalVisible={setPopupModalVisible}
        />
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
