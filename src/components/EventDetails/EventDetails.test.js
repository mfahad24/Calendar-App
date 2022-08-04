import React from "react";
import { render, screen } from "@testing-library/react";
import EventDetails from "./EventDetails";

test("event details screen is rendered", () => {
  render(<EventDetails />);
  const closeButton = screen.getByText("close");
  expect(closeButton).toBeInTheDocument();
});

test("event details screen rendered with july 4 event details", () => {
  render(<EventDetails clickedDayNumber={4} setShowEventDetails={true} />);
  const closeButton = screen.getByText("A day off from training camp");
  expect(closeButton).toBeInTheDocument();
});

test("event details screen rendered with july 15 event details", () => {
  render(<EventDetails clickedDayNumber={15} setShowEventDetails={true} />);
  const closeButton = screen.getByText("Workout");
  expect(closeButton).toBeInTheDocument();
});

test("event details screen rendered with july 30 event details", () => {
  render(<EventDetails clickedDayNumber={30} setShowEventDetails={true} />);
  const closeButton = screen.getByText(
    "Doctor's Appointment with Dr. Football"
  );
  expect(closeButton).toBeInTheDocument();
});
