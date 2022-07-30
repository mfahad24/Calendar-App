import React, { ReactElement } from "react";
import allEvents from "../../data/AllEvents";
import "./EventDescriptionInTile.css";

interface EventDescriptionInTileProps {
  widthDimension: Number;
  day: Number;
}

const EventDescriptionInTile: React.FC<EventDescriptionInTileProps> = ({
  widthDimension,
}): ReactElement => {
  return (
    <>
      <div className="event-description-in-tile-container">
        <div className="event-description-in-tile__hidden">Test</div>
      </div>
    </>
  );
};

export default EventDescriptionInTile;
