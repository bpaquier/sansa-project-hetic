export default function getCurrentDay():
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thurday"
  | "friday"
  | "saturday"
  | "sunday" {
  const currentDayIndex = new Date().getDay();

  const days: (
    | "monday"
    | "tuesday"
    | "wednesday"
    | "thurday"
    | "friday"
    | "saturday"
    | "sunday"
  )[] = [
    "monday",
    "tuesday",
    "wednesday",
    "thurday",
    "friday",
    "saturday",
    "sunday"
  ];

  return days[currentDayIndex];
}
