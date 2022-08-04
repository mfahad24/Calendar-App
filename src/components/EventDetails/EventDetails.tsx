import React, { ReactElement } from "react";
import "./EventDetails.css";
import allEvents from "../../data/AllEvents";
import { getMonthNumberConvertedToMonthName } from "../../utils/CalendarCalculations";

interface EventDetailsProps {
  clickedDayNumber: Number;
  setShowEventDetails: Function;
  selectedMonth: String;
}

const EventDetails: React.FC<EventDetailsProps> = ({
  clickedDayNumber,
  setShowEventDetails,
  selectedMonth,
}): ReactElement => {
  return (
    <>
      <div className="event-details-container">
        <div data-testid="event-details" className="event-details">
          {allEvents.map((event, index) => {
            if (
              Number(event.date.split("").slice(3, 5).join("")) ===
                clickedDayNumber &&
              getMonthNumberConvertedToMonthName(
                event.date.split("").slice(0, 2).join("")
              ) === selectedMonth
            ) {
              return (
                <>
                  <div key={`event-details-${index}`}>
                    <div
                      key={`event-details__type-${index}`}
                      className="event-details__type"
                    >
                      <strong>Event: </strong>
                      {event.type}
                    </div>
                    <div
                      key={`event-details__date-${index}`}
                      className="event-details__date"
                    >
                      <strong>Date: </strong> {event.date}
                    </div>
                    <div
                      key={`event-details__name-${index}`}
                      className="event-details__name"
                    >
                      <strong>Name: </strong> {event.name}
                    </div>
                    <div
                      key={`event-details__description-${index}`}
                      className="event-details__description"
                    >
                      <strong>Description: </strong> {event.description}
                    </div>
                  </div>
                </>
              );
            }
          })}
          <button
            className="event-details__close"
            onClick={() => setShowEventDetails(false)}
          >
            close
          </button>
        </div>
      </div>
    </>
  );
};

export default EventDetails;
