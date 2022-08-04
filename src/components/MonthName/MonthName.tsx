import React, { ReactElement } from "react";
import { getMonthName, getCurrentYear } from "../../utils/CalendarCalculations";
import "./MonthName.css";

interface MonthNameProps {
  selectedMonth: String;
}

const MonthName: React.FC<MonthNameProps> = ({
  selectedMonth,
}): ReactElement => {
  return (
    <>
      <div className="month-name">{selectedMonth + " " + getCurrentYear()}</div>
    </>
  );
};

export default MonthName;
