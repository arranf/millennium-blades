import { Writable, writable } from "svelte/store";
import { ExpansionName, Settings } from "./models";
import { SETTINGS_NAME } from "./constants";
import { MetagameSet } from "./cards";

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
  const settings = JSON.parse(localStorage.getItem(SETTINGS_NAME)) ?? {};
  return {
    collapsed: {
      expansionSelect: settings?.collapsed?.expansionSelect ?? false
    },
    activeExpansions: settings?.activeExpansions ?? [ExpansionName.BASE_GAME],
    selectedSets: {
      bronzePromos: [],
      silverPromos: [],
      goldPromos: [],
      expansionPacks: [],
      premiumPacks: [],
      masterPacks: [],
      bronzePromoPrize: [],
      silverPromoPrize: [],
      metagameSets: [MetagameSet.ELEMENT, MetagameSet.TYPE],
      ...settings?.selectedSets,
    },
  };
}

settings.subscribe(settings => {
  persist(settings)
});

export function persist(settings: Settings): void {
  localStorage.setItem(
    SETTINGS_NAME,
    JSON.stringify({ ...settings })
  );
};