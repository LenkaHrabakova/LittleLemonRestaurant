import { AvailableTime } from "./AvailableTime";

export type UpdateAvailableTimes = (action: UpdateAvailableTimesAction) => void;

export type UpdateAvailableTimesAction = {
  type: "date-changed" | "table-reserved";
  value?: string;
};

export function updateTimes(
  state: AvailableTime[],
  action: UpdateAvailableTimesAction
) {
  if (action.type === "date-changed") {
    return initializeTimes(action.value!);
  }
  // if ((action.type = "table-reserved")) {
  //   return [];
  // }
  return state;
}

export function initializeTimes(forDate: string): AvailableTime[] {
  return [
    { name: "17:00", value: "17:00" },
    { name: "18:00", value: "18:00" },
    { name: "19:00", value: "19:00" },
    { name: "20:00", value: "20:00" },
    { name: "21:00", value: "21:00" },
    { name: "22:00", value: "22:00" },
  ];
}
