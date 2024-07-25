/* [4 points] écrire les tests correspondants à tous les cas que vous jugez pertinent de tester. */

import { isRangeAvailable, DateRange } from "./index";

describe("isRangeAvailable", () => {
  it("Retourne true si la plage demandée est disponible", () => {
    const selectedDate: DateRange = {
      startDate: new Date("2024-07-25"),
      endDate: new Date("2024-08-01"),
    };
    const availableDate: DateRange = {
      startDate: new Date("2024-07-20"),
      endDate: new Date("2024-08-04"),
    };
    const result = isRangeAvailable(selectedDate, availableDate);
    expect(result).toBe(true);
  });

  it("Retourne false si la plage demandée n'est pas disponible", () => {
    const selectedDate: DateRange = {
      startDate: new Date("2024-07-25"),
      endDate: new Date("2024-08-01"),
    };
    const availableDate: DateRange = {
      startDate: new Date("2024-08-05"),
      endDate: new Date("2024-08-10"),
    };
    const result = isRangeAvailable(selectedDate, availableDate);
    expect(result).toBe(false);
  });

  it("Retourne true si la plage demandée est égale à la plage disponible", () => {
    const selectedDate: DateRange = {
      startDate: new Date("2024-07-25"),
      endDate: new Date("2024-08-01"),
    };
    const availableDate: DateRange = {
      startDate: new Date("2024-07-25"),
      endDate: new Date("2024-08-01"),
    };
    const result = isRangeAvailable(selectedDate, availableDate);
    expect(result).toBe(true);
  });

  it("Retourne false si la plage demandée est partiellement disponible", () => {
    const selectedDate: DateRange = {
      startDate: new Date("2024-07-25"),
      endDate: new Date("2024-08-01"),
    };
    const availableDate: DateRange = {
      startDate: new Date("2024-07-30"),
      endDate: new Date("2024-08-05"),
    };
    const result = isRangeAvailable(selectedDate, availableDate);
    expect(result).toBe(false);
  });

  it("Retourne false si la plage demandée est entièrement en dehors de la plage disponible", () => {
    const selectedDate: DateRange = {
      startDate: new Date("2024-07-25"),
      endDate: new Date("2024-08-01"),
    };
    const availableDate: DateRange = {
      startDate: new Date("2024-08-05"),
      endDate: new Date("2024-08-10"),
    };
    const result = isRangeAvailable(selectedDate, availableDate);
    expect(result).toBe(false);
  });
});
