//all constants
export const dayNamesOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
//TODO: to make multi-month change this variable (part 1)
export let firstDayOfTheMonth = "July 1, 2022";

//all exported functions
export const getNumberOfFilledCellsInCurrentMonth = () => {
  let currentDate = new Date();
  let totalDaysInCurrentMonth = new Date(
    currentDate.getFullYear(),
    //TODO: to make multi-month, make this dynamic (part 2)
    currentDate.getMonth() + 1,
    0
  ).getDate();
  totalDaysInCurrentMonth += getNumberOfEmptyCellsInTheMonth(
    firstDayOfTheMonth
  );
  let allCellsInCurrentMonth = Array.from(
    { length: totalDaysInCurrentMonth },
    (_, i) => i + 1
  );
  return allCellsInCurrentMonth;
};

//determining how many cells in calendar need to be empty
//ex: since July 2022 starts on a Friday - we need 5 empty cells at beginning
export const getNumberOfEmptyCellsInTheMonth = (firstDayOfTheMonth) => {
  let currentDate = new Date(firstDayOfTheMonth);
  let firstDayOfMonthDayNumber = currentDate.getDay();
  return firstDayOfMonthDayNumber;
};

export const getAllEmptyAndFilledCellsInCurrentMonth = () => {
  const allEmptyAndFilledCellsInCurrentMonth = [];
  const numberOfEmptyCells = getNumberOfEmptyCellsInTheMonth(
    firstDayOfTheMonth
  );
  getNumberOfFilledCellsInCurrentMonth().map((day) => {
    if (day <= numberOfEmptyCells) {
      return allEmptyAndFilledCellsInCurrentMonth.push(0);
    } else {
      return allEmptyAndFilledCellsInCurrentMonth.push(
        (day -= numberOfEmptyCells)
      );
    }
  });
  return allEmptyAndFilledCellsInCurrentMonth;
};

export const getCurrentMonthName = () => {
  let currentDate = new Date();
  //TODO: to make multi-month, make this dynamic (part 3)
  return monthNames[currentDate.getMonth()] + " " + currentDate.getFullYear();
};

export const getCurrentDayNumber = () => {
  let currentDate = new Date();
  return currentDate.getDate();
};
