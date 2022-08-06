import {
  getNumberOfEmptyTilesInTheBeginningOfMonth,
  getFinalTotalEmptyAndFilledCellsInCurrentMonth,
  getNumberOfTotalTilesInCurrentMonth,
} from "../utils/CalendarCalculations";

//December
describe("empty tiles at the beginning for January is 6", () => {
  it("January 1, 2022", () => {
    expect(getNumberOfEmptyTilesInTheBeginningOfMonth("January 1, 2022")).toBe(
      6
    );
  });
});

describe("total tiles before empty ones are id'd is 37", () => {
    it("January 1, 2022", () => {
      const result = getNumberOfTotalTilesInCurrentMonth(
        "January 1, 2022",
        "January"
      );
      expect(result.length).toEqual(37);
    });
  });

describe("total tiles for january is 37 - 6 empty id'd and 31 filled", () => {
  it("January 1, 2022", () => {
    const result = getFinalTotalEmptyAndFilledCellsInCurrentMonth(
      "January 1, 2022",
      "January"
    );
    expect(result.length).toEqual(37);
  });
});

//July
describe("empty tiles at the beginning for July is 5", () => {
  it("July 1, 2022", () => {
    expect(getNumberOfEmptyTilesInTheBeginningOfMonth("July 1, 2022")).toBe(5);
  });
});

describe("total tiles before empty ones are id'd is 36", () => {
    it("July 1, 2022", () => {
      const result = getNumberOfTotalTilesInCurrentMonth(
        "July 1, 2022",
        "July"
      );
      expect(result.length).toEqual(36);
    });
  });

describe("total tiles for january is 36 - 5 empty and 31 filled", () => {
  it("July 1, 2022", () => {
    const result = getFinalTotalEmptyAndFilledCellsInCurrentMonth(
      "July 1, 2022",
      "July"
    );
    expect(result.length).toEqual(36);
  });
});

//December
describe("empty tiles at the beginning for December is 4", () => {
  it("December 1, 2022", () => {
    expect(getNumberOfEmptyTilesInTheBeginningOfMonth("December 1, 2022")).toBe(
      4
    );
  });
});

describe("total tiles before empty ones are id'd is 35", () => {
    it("December 1, 2022", () => {
      const result = getNumberOfTotalTilesInCurrentMonth(
        "December 1, 2022",
        "December"
      );
      expect(result.length).toEqual(35);
    });
  });

describe("total tiles for December is 36 - 4 empty and 31 filled", () => {
  it("December 1, 2022", () => {
    const result = getFinalTotalEmptyAndFilledCellsInCurrentMonth(
      "December 1, 2022",
      "December"
    );
    expect(result.length).toEqual(35);
  });
});
