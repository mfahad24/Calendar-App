import React, { ReactElement } from "react";
import { getCurrentYear } from "../../utils/CalendarCalculations";
import "./MonthName.css";

interface MonthNameProps {
  selectedMonth: String;
}

const MonthName: React.FC<MonthNameProps> = ({
  selectedMonth,
}): ReactElement => {
  return (
    <>
      <div className="title-container">
        <div>{selectedMonth + " " + getCurrentYear()}</div>
      </div>
    </>
  );
};

export default MonthName;
