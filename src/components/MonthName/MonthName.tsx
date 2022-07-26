import React, { ReactElement } from "react";
import { getCurrentMonthName } from "../../utils/CalendarCalculations";
import "./MonthName.css";

const MonthName: React.FC = (): ReactElement => {
  return (
    <>
    <div className="month-name">
      {getCurrentMonthName()}
    </div>
    </>
  );
}

export default MonthName;
