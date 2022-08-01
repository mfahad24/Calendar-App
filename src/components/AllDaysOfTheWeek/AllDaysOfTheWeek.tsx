import React, { ReactElement, useState, useEffect } from "react";
import { dayNamesOfTheWeek } from "../../constants/constants";
import "./AllDaysOfTheWeek.css";

const AllDaysOfTheWeek: React.FC = (): ReactElement => {
  const [widthDimensions, setWidthDimensions] = useState<Number>(
    window.innerWidth
  );

  useEffect(() => {
    function handleResize() {
      setWidthDimensions(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="calendar-days">
      {dayNamesOfTheWeek.map((singleDayName, index) => {
        return (
          <div
            key={`day-of-the-week${index}`}
            className="calendar-days__day-name"
          >
            {widthDimensions <= 480
              ? singleDayName.split("").slice(0, 2)
              : singleDayName}
          </div>
        );
      })}
    </div>
  );
};

export default AllDaysOfTheWeek;
