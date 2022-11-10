import React, { ReactElement } from "react";
import { getCurrentYear } from "../../utils/CalendarCalculations";
import "./MonthName.css";

//material ui icons
import AddIcon from '@mui/icons-material/Add';

interface MonthNameProps {
  selectedMonth: String;
  setPopupModalVisible: Function
}

const MonthName: React.FC<MonthNameProps> = ({
  selectedMonth,
  setPopupModalVisible
}): ReactElement => {
  return (
    <>
      <div className="title-container">
        <div className="title">{selectedMonth + " " + getCurrentYear()}</div>
        <AddIcon className="add-event-btn" onClick={() => {setPopupModalVisible(true)}}/>
      </div>
    </>
  );
};

export default MonthName;
