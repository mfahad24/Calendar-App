import React from "react";
import "./AllDaysOfTheWeek.css";

function AllDaysOfTheWeek() {
  return (
    <div className="calendar-days">
          <div className="calendar-days__day-name">Sunday</div>
          <div className="calendar-days__day-name">Monday</div>
          <div className="calendar-days__day-name">Tuesday</div>
          <div className="calendar-days__day-name">Wednesday</div>
          <div className="calendar-days__day-name">Thursday</div>
          <div className="calendar-days__day-name">Friday</div>
          <div className="calendar-days__day-name">Saturday</div>
        </div>
  );
}

export default AllDaysOfTheWeek;
