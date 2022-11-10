import React from "react";
import { render, screen } from "@testing-library/react";
import EventDetails from "./EventDetails";

test("event details screen is rendered", () => {
  render(<EventDetails />);
  const closeButton = screen.getByText("close");
  expect(closeButton).toBeInTheDocument();
});

test("event details screen rendered with August 4 event details", () => {
  render(
    <EventDetails
      clickedDayNumber={4}
      setPopupModalVisible={true}
      selectedMonth={"August"}
    />
  );
  const eventDescription = screen.getByText("A day off from training camp");
  expect(eventDescription).toBeInTheDocument();
});

test("event details screen rendered with August 30 event details", () => {
  render(
    <EventDetails
      clickedDayNumber={30}
      setPopupModalVisible={true}
      selectedMonth={"August"}
    />
  );
  const eventDescription = screen.getByText(
    "Doctor's Appointment with Dr. Football"
  );
  expect(eventDescription).toBeInTheDocument();
});
