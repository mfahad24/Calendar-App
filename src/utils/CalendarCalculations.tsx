import { monthNames } from "../constants/constants";

//get all empty tiles in the beginning of the month
export const getNumberOfEmptyTilesInTheBeginningOfMonth = (
  firstDayOfTheMonthFullDate: string
) => {
  let currentDate = new Date(firstDayOfTheMonthFullDate);
  let firstDayOfMonthDayNumber = currentDate.getDay();
  return firstDayOfMonthDayNumber;
};

//get all empty and filled tiles without empty tiles id'd
export const getNumberOfTotalTilesInCurrentMonth = (
  firstDayOfTheMonthFullDate: string,
  selectedMonth: string
) => {
  let currentDate = new Date();
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

//sets value of empty tiles to 0 and outputs a final array to map in render
export const getFinalTotalEmptyAndFilledCellsInCurrentMonth = (
  firstDayOfTheMonthFullDate: string,
  selectedMonth: string
) => {
  const allEmptyAndFilledTilesInCurrentMonth: Array<null | Number> = [];
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

export const getClickedMonthValueForCurrentDateCalculation = (month: string) => {
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

export const getMonthNumberConvertedToMonthName = (eventMonth: number) => {
  return monthNames[eventMonth - 1];
};
