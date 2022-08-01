import { monthNames, firstDayOfTheMonth } from "../constants/constants";

const numberOfEmptyTilesInTheBeginningOfMonth = getNumberOfEmptyTilesInTheBeginningOfMonth(firstDayOfTheMonth);

const getNumberOfEmptyTilesInTheBeginningOfMonth = (num) => {
  let currentDate = new Date(num);
  //getDay outputs 0 - 6, 0 = sun & 6 = sat
  let firstDayOfMonthDayNumber = currentDate.getDay();
  return firstDayOfMonthDayNumber;
};

const getNumberOfTotalTilesInCurrentMonth = () => {
  let currentDate = new Date();
  let totalDaysInCurrentMonth = new Date(
    currentDate.getFullYear(),
    //TODO: to make multi-month, make this dynamic (part 2)
    //getMonth gives 0 - 11 value, 0 = jan & 11 = dec
    currentDate.getMonth() + 1,
    0
  ).getDate();
  totalDaysInCurrentMonth += numberOfEmptyTilesInTheBeginningOfMonth;
  let allTilesInCurrentMonth = Array.from(
    { length: totalDaysInCurrentMonth },
    (_, i) => i + 1
  );
  return allTilesInCurrentMonth;
};

export const getTotalEmptyAndFilledTilesInCurrentMonth = () => {
  const allEmptyAndFilledTilesInCurrentMonth = [];
  getNumberOfTotalTilesInCurrentMonth().map((currentTile) => {
    if (currentTile <= numberOfEmptyTilesInTheBeginningOfMonth) {
      return allEmptyAndFilledTilesInCurrentMonth.push(0);
    } else {
      return allEmptyAndFilledTilesInCurrentMonth.push(
        (currentTile -= numberOfEmptyTilesInTheBeginningOfMonth)
      );
    }
  });
  return allEmptyAndFilledTilesInCurrentMonth;
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
