import React, { ReactElement } from "react";
import { getCurrentMonthName } from "../../utils/CalendarCalculations";
import "./MonthName.css";

interface MonthNameProps {
  selectedMonth: String;
}

const MonthName: React.FC<MonthNameProps> = ({
  selectedMonth,
}): ReactElement => {
  return (
    <>
      <div className="month-name">{getCurrentMonthName(selectedMonth)}</div>
    </>
  );
};

export default MonthName;
