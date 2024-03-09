import {
  ENDDATE_SLOT1,
  ENDDATE_SLOT2,
  ENDDATE_SLOT3,
  ENDDATE_SLOT4,
  ENDDATE_SLOT5,
  ENDDATE_SLOT6,
  ENDDATE_SLOT7,
  ENDDATE_SLOT8,
  ENDDATE_SLOT9,
  STARTDATE_SLOT1,
  STARTDATE_SLOT2,
  STARTDATE_SLOT3,
  STARTDATE_SLOT4,
  STARTDATE_SLOT5,
  STARTDATE_SLOT6,
  STARTDATE_SLOT7,
  STARTDATE_SLOT8,
  STARTDATE_SLOT9,
} from "../constant";

export function convertWeekDateToDate(weekDateString: string): string {
  console.log("weekDateString:", weekDateString);

  // Using regex to extract year, week, and dayOfWeek
  const match = weekDateString.match(/^(\d{4})-W(\d{2})-(\w+)$/);

  if (!match) {
    console.error("Invalid weekDateString format:", weekDateString);
    return "Invalid Format";
  }

  const year: number = parseInt(match[1]);
  const week: number = parseInt(match[2]);
  const dayOfWeek: string = match[3];

  console.log("year:", year);
  console.log("week:", week);
  console.log("dayOfWeek:", dayOfWeek);

  // Create a date for the first day of the specified year
  const firstDayOfYear: Date = new Date(year, 0, 1);

  // Calculate the date of the first day of the specified week
  const firstDayOfWeek: Date = new Date(
    firstDayOfYear.getTime() +
      ((week - 1) * 7 - firstDayOfYear.getDay() + 1) * 24 * 60 * 60 * 1000
  );

  // Calculate the date of the specified day of the week
  const day: number =
    dayOfWeek === "Sunday"
      ? 0
      : dayOfWeek === "Monday"
      ? 1
      : dayOfWeek === "Tuesday"
      ? 2
      : dayOfWeek === "Wednesday"
      ? 3
      : dayOfWeek === "Thursday"
      ? 4
      : dayOfWeek === "Friday"
      ? 5
      : 6;

  const targetDate: Date = new Date(
    firstDayOfWeek.getTime() + day * 24 * 60 * 60 * 1000
  );

  // Format the date as "dd/mm/yyyy"
  const dd: string = String(targetDate.getDate()).padStart(2, "0");
  const mm: string = String(targetDate.getMonth() + 1).padStart(2, "0");
  const yyyy: number = targetDate.getFullYear();

  return `${dd}/${mm}/${yyyy}`;
}

export function getCurrentWeek(): string {
  const today: Date = new Date();
  const year: number = today.getFullYear();
  const firstDayOfYear: Date = new Date(year, 0, 1);
  const daysSinceStartOfYear: number = Math.floor(
    (today.getTime() - firstDayOfYear.getTime()) / (1000 * 60 * 60 * 24)
  );
  const isoWeekNumber: number =
    Math.floor(
      (daysSinceStartOfYear + ((firstDayOfYear.getDay() + 6) % 7)) / 7
    ) + 1;

  return year + "-W" + isoWeekNumber.toString().padStart(2, "0");
}

const currentWeek: string = getCurrentWeek();
console.log(currentWeek); // Output: e.g., "2024-W10"

export const getCurrentDay = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const currentDay = days[currentDate.getDay()];
  return currentDay;
};

export const checkValidSlotMonday = (
  slot: string,
  data: any,
  setDisableButtonsMonday?: any
): boolean => {
  try {
    return !!data?.Monday?.find((res: any) => res.slot === slot);
  } catch (err) {
    return false;
  }
};

export const checkValidSlotTuesday = (slot: string, data: any): boolean => {
  try {
    return !!data?.Tuesday?.find((res: any) => res.slot === slot);
  } catch (err) {
    return false;
  }
};

export const checkValidSlotWednesday = (slot: string, data: any): boolean => {
  try {
    return !!data?.Wednesday?.find((res: any) => res.slot === slot);
  } catch (err) {
    return false;
  }
};

export const checkValidSlotThursday = (slot: string, data: any): boolean => {
  try {
    return !!data?.Thursday?.find((res: any) => res.slot === slot);
  } catch (err) {
    return false;
  }
};

export const checkValidSlotFriday = (slot: string, data: any): boolean => {
  try {
    return !!data?.Friday?.find((res: any) => res.slot === slot);
  } catch (err) {
    return false;
  }
};

export const checkValidSlotSaturday = (slot: string, data: any): boolean => {
  try {
    return !!data?.Saturday?.find((res: any) => res.slot === slot);
  } catch (err) {
    return false;
  }
};

export const checkValidSlotSunday = (slot: string, data: any): boolean => {
  try {
    return !!data?.Sunday?.find((res: any) => res.slot === slot);
  } catch (err) {
    return false;
  }
};

export const getCurrentDate = (weekdays: any, weeks: any) => {
  // Split the weeks string to get the year and week number
  const [year, weekNumber] = weeks.split("-W");
  const ISOWeekStart = new Date(year, 0, 1 + (weekNumber - 1) * 7); // Calculate the starting day of the ISO week

  // Calculate the day of the week based on the weekdays value
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const weekDayIndex = daysOfWeek.indexOf(weekdays);

  // Calculate the date for the provided day
  const targetDate = new Date(ISOWeekStart);
  targetDate.setDate(ISOWeekStart.getDate() + weekDayIndex);

  // Format the date as desired (e.g., "YYYY-MM-DD")
  const formattedDate = targetDate.toISOString().split("T")[0];

  return formattedDate;
};

export const getStartAndEndDate = (
  day: string,
  slot: string,
  weekdays: string,
  weeks: string
) => {
  // Define constants for start and end dates for each slot
  const startDateMap: { [key: string]: string } = {
    Slot1: STARTDATE_SLOT1,
    Slot2: STARTDATE_SLOT2,
    Slot3: STARTDATE_SLOT3,
    Slot4: STARTDATE_SLOT4,
    Slot5: STARTDATE_SLOT5,
    Slot6: STARTDATE_SLOT6,
    Slot7: STARTDATE_SLOT7,
    Slot8: STARTDATE_SLOT8,
    Slot9: STARTDATE_SLOT9,
  };

  const endDateMap: { [key: string]: string } = {
    Slot1: ENDDATE_SLOT1,
    Slot2: ENDDATE_SLOT2,
    Slot3: ENDDATE_SLOT3,
    Slot4: ENDDATE_SLOT4,
    Slot5: ENDDATE_SLOT5,
    Slot6: ENDDATE_SLOT6,
    Slot7: ENDDATE_SLOT7,
    Slot8: ENDDATE_SLOT8,
    Slot9: ENDDATE_SLOT9,
  };

  // Get the start and end dates based on the slot
  const startDate = `${day}${startDateMap[slot]}`;
  const endDate = `${day}${endDateMap[slot]}`;

  return { startDate, endDate };
};
