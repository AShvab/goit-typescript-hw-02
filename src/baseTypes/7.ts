/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayInWeek {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

function isWeekend(day: DayInWeek): boolean {
  return day === DayInWeek.Saturday || day === DayInWeek.Sunday;
}

const currentDay: DayInWeek = DayInWeek.Monday;
const isCurrentDayWeekend: boolean = isWeekend(currentDay);

console.log(`Is ${currentDay} a Weekend?: ${isCurrentDayWeekend}`);
