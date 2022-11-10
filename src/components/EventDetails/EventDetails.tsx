import React, { ReactElement } from "react";
import "./EventDetails.css";
import allEvents from "../../data/AllEvents";
import { getMonthNumberConvertedToMonthName } from "../../utils/CalendarCalculations";

// material ui imports
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CloseIcon from '@mui/icons-material/Close';

interface EventDetailsProps {
  clickedDayNumber: Number;
  setPopupModalVisible: Function;
  selectedMonth: String;
}

const EventDetails: React.FC<EventDetailsProps> = ({
  clickedDayNumber,
  setPopupModalVisible,
  selectedMonth,
}): ReactElement => {
  return (
    <>
      <div
        className="event-details-container"
        key={`event-type-in-tile-container`}
      >
        <div
          data-testid="event-details"
          className="event-details"
          key={`event-details`}
        >
          {allEvents.map((event, index) => {
            if (
              Number(event.date.split("").slice(3, 5).join("")) ===
                clickedDayNumber &&
              getMonthNumberConvertedToMonthName(
                Number(event.date.split("").slice(0, 2).join(""))
              ) === selectedMonth
            ) {
              return (
                <div key={`event-details-${index}`}>
                  <div
                    key={`event-details__date-${index}`}
                    className="event-details__date"
                  >
                    {event.date}
                  </div>
                  <div
                    key={`event-details__description-${index}`}
                    className="event-details__description"
                  >
                    {event.description}
                  </div>
                </div>
              );
            } else {
              return;
            }
          })}
          <CloseIcon className="event-details__close" onClick={() => setPopupModalVisible(false)}/>
        </div>
      </div>
    </>
  );
};

export default EventDetails;
