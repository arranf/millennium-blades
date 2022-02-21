import { get, writable } from "svelte/store";
import type { Writable } from "svelte/store";
import { ExpansionName } from "../types/ExpansionName";
import type { Settings } from "../types/Settings";
import { SETTINGS_NAME } from "../constants";
import { MetagameSet } from "../data/cards";

export const settings: Writable<Settings> = writable(getSettings());

function getSettings(): Settings {
  const localStorageSettings = localStorage.getItem(SETTINGS_NAME);
  const settings = localStorageSettings ? JSON.parse(localStorageSettings) : {};
  return {
    collapsed: {
      expansionSelect: settings?.collapsed?.expansionSelect ?? false,
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

settings.subscribe((settings) => {
  persist(settings);
});

export function persist(settings: Settings): void {
  localStorage.setItem(SETTINGS_NAME, JSON.stringify({ ...settings }));
}
