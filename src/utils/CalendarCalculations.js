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

//all exported functions
export const getNumberOfFilledCellsInCurrentMonth = (
  firstDayOfTheMonthFullDate
) => {
  let currentDate = new Date();
  let totalDaysInCurrentMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();
  totalDaysInCurrentMonth += getNumberOfEmptyCellsInTheMonth(
    firstDayOfTheMonthFullDate
  );
  let allCellsInCurrentMonth = Array.from(
    { length: totalDaysInCurrentMonth },
    (_, i) => i + 1
  );
  return allCellsInCurrentMonth;
};

//determining how many cells in calendar need to be empty
//ex: since July 2022 starts on a Friday - we need 5 empty cells at beginning
export const getNumberOfEmptyCellsInTheMonth = (firstDayOfTheMonthFullDate) => {
  let currentDate = new Date(firstDayOfTheMonthFullDate);
  let firstDayOfMonthDayNumber = currentDate.getDay();
  return firstDayOfMonthDayNumber;
};

export const getAllEmptyAndFilledCellsInCurrentMonth = (
  firstDayOfTheMonthFullDate
) => {
  const allEmptyAndFilledCellsInCurrentMonth = [];
  const numberOfEmptyCells = getNumberOfEmptyCellsInTheMonth(
    firstDayOfTheMonthFullDate
  );
  getNumberOfFilledCellsInCurrentMonth(firstDayOfTheMonthFullDate).map(
    (day) => {
      if (day <= numberOfEmptyCells) {
        return allEmptyAndFilledCellsInCurrentMonth.push(0);
      } else {
        return allEmptyAndFilledCellsInCurrentMonth.push(
          (day -= numberOfEmptyCells)
        );
      }
    }
  );
  return allEmptyAndFilledCellsInCurrentMonth;
};

export const getCurrentMonthName = (selectedMonth) => {
  let currentDate = new Date();
  return selectedMonth + " " + currentDate.getFullYear();
};

export const getCurrentDayNumber = () => {
  let currentDate = new Date();
  return currentDate.getDate();
};
