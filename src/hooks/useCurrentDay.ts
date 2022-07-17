export default function useCurrentDay():
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thurday"
  | "friday"
  | "saturday"
  | "sunday" {
  const currentDayIndex = new Date().getDay();
  console.log(currentDayIndex);

  const days: (
    | "monday"
    | "tuesday"
    | "wednesday"
    | "thurday"
    | "friday"
    | "saturday"
    | "sunday"
  )[] = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thurday",
    "friday",
    "saturday"
  ];

  return days[currentDayIndex];
}
