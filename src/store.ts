import { Writable, writable } from "svelte/store";
import type { Settings } from "./models";
import { SETTINGS_NAME } from "./constants";

export interface Timer {
  secondsLeft: string;
  minutesLeft: number;
  timeLeft: number;
  timer: any;
}

export const timer: Writable<Timer> = writable({
  secondsLeft: "0",
  minutesLeft: 0,
  timeLeft: undefined,
  timer: null,
});

export const settings: Writable<Settings> = writable(getSettings());

function getSettings(): Settings {
  const settings = JSON.parse(localStorage.getItem(SETTINGS_NAME));
  return {
    activeExpansions: settings.activeExpansions || [],
    selectedSets: {
      bronzePromos: [],
      silverPromos: [],
      goldPromos: [],
      expansionPacks: [],
      premiumPacks: [],
      masterPacks: [],
      silverPromoPrize: [],
      goldPromoPrize: [],
      ...(settings.selectedSets || {}),
    },
  };
}
