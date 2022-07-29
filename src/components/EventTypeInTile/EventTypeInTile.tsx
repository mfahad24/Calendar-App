import React, { ReactElement } from "react";
import allEvents from "../../data/AllEvents";
import "./EventTypeInTile.css";

interface EventTypeInTileProps {
  day: Number;
  widthDimension: Number;
}

const EventTypeInTile: React.FC<EventTypeInTileProps> = ({
  day,
  widthDimension,
}): ReactElement => {
  return (
    <>
      <div className="event-type-in-tile-container">
        {allEvents.map((event, key) => {
          if (
            Number(event.date.split("").slice(3, 5).join("")) === day &&
            widthDimension >= 1200
          ) {
            return (
              <div
                key={`event-type-in-tile${key}`}
                className="event-type-in-tile"
              >
                {event.type.length > 20
                  ? `${event.type.slice(0, 15)}...`
                  : event.type}
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default EventTypeInTile;