import { monthNames } from "../constants/constants";

export const getNumberOfTotalTilesInCurrentMonth = (
  firstDayOfTheMonthFullDate,
  selectedMonth
) => {
  let currentDate = new Date();
  console.log(firstDayOfTheMonthFullDate);
  let totalTilesInCurrentMonth = new Date(
    currentDate.getFullYear(),
    getClickedMonthValueForCurrentDateCalculation(selectedMonth),
    0
  ).getDate();
  totalTilesInCurrentMonth += getNumberOfEmptyTilesInTheBeginningOfMonth(
    firstDayOfTheMonthFullDate
  );
  let allTilesInCurrentMonth = Array.from(
    { length: totalTilesInCurrentMonth },
    (_, i) => i + 1
  );
  return allTilesInCurrentMonth;
};

export const getNumberOfEmptyTilesInTheBeginningOfMonth = (
  firstDayOfTheMonthFullDate
) => {
  let currentDate = new Date(firstDayOfTheMonthFullDate);
  let firstDayOfMonthDayNumber = currentDate.getDay();
  return firstDayOfMonthDayNumber;
};

export const getTotalEmptyAndFilledCellsInCurrentMonth = (
  firstDayOfTheMonthFullDate,
  selectedMonth
) => {
  const allEmptyAndFilledTilesInCurrentMonth = [];
  const numberOfEmptyTiles = getNumberOfEmptyTilesInTheBeginningOfMonth(
    firstDayOfTheMonthFullDate
  );
  getNumberOfTotalTilesInCurrentMonth(
    firstDayOfTheMonthFullDate,
    selectedMonth
  ).map((day) => {
    if (day <= numberOfEmptyTiles) {
      return allEmptyAndFilledTilesInCurrentMonth.push(0);
    } else {
      return allEmptyAndFilledTilesInCurrentMonth.push(
        (day -= numberOfEmptyTiles)
      );
    }
  });
  return allEmptyAndFilledTilesInCurrentMonth;
};

export const getClickedMonthValueForCurrentDateCalculation = (month) => {
  return monthNames.indexOf(month) + 1;
};

const currentDate = new Date();

export const getMonthName = () => {
  return monthNames[currentDate.getMonth()];
};

export const getCurrentYear = () => {
  return currentDate.getFullYear();
};

export const getCurrentDayNumber = () => {
  return currentDate.getDate();
};

export const getMonthNumberConvertedToMonthName = (eventMonth) => {
  return monthNames[eventMonth - 1];
};
