export const getNumberOfTotalTilesInCurrentMonth = (
  firstDayOfTheMonthFullDate
) => {
  let currentDate = new Date();
  let totalTilesInCurrentMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
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
  firstDayOfTheMonthFullDate
) => {
  const allEmptyAndFilledTilesInCurrentMonth = [];
  const numberOfEmptyTiles = getNumberOfEmptyTilesInTheBeginningOfMonth(
    firstDayOfTheMonthFullDate
  );
  getNumberOfTotalTilesInCurrentMonth(firstDayOfTheMonthFullDate).map((day) => {
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

export const getCurrentMonthName = (selectedMonth) => {
  let currentDate = new Date();
  return selectedMonth + " " + currentDate.getFullYear();
};

export const getCurrentDayNumber = () => {
  let currentDate = new Date();
  return currentDate.getDate();
};
