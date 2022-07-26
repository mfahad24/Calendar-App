import React from "react";
import { render, screen } from "@testing-library/react";
import Calendar from "./Calendar";

test("current month and year are rendered", () => {
  render(<Calendar />);
  const calendarTitle = screen.getByText("August 2022");
  expect(calendarTitle).toBeInTheDocument();
});

test("all days of the week are rendered", () => {
  render(<Calendar />);
  const sunday = screen.getByText("Sunday");
  const monday = screen.getByText("Monday");
  const tuesday = screen.getByText("Tuesday");
  const wednesday = screen.getByText("Wednesday");
  const thursday = screen.getByText("Thursday");
  const friday = screen.getByText("Friday");
  const saturday = screen.getByText("Saturday");

  expect(sunday).toBeInTheDocument();
  expect(monday).toBeInTheDocument();
  expect(tuesday).toBeInTheDocument();
  expect(wednesday).toBeInTheDocument();
  expect(thursday).toBeInTheDocument();
  expect(friday).toBeInTheDocument();
  expect(saturday).toBeInTheDocument();
});
