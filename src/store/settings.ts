import { writable } from "svelte/store";
import type { Writable } from "svelte/store";
import { ExpansionName } from "../types/ExpansionName";
import type { Settings } from "../types/Settings";
import { DEFAULT_METAGAME_SETS, SETTINGS_NAME } from "../constants";

export const settings: Writable<Settings> = writable(getSettings());

function getSettings(): Settings {
  const localStorageSettings = localStorage.getItem(SETTINGS_NAME);
  const settings: Partial<Settings> = localStorageSettings
    ? JSON.parse(localStorageSettings)
    : {};
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
      metagameSets: DEFAULT_METAGAME_SETS,
      ...settings?.selectedSets,
    },
    playerCount: settings?.playerCount ?? 4,
    isPreRelease: false,
  };
}

settings.subscribe((settings) => {
  persist(settings);
});

export function persist(settings: Settings): void {
  localStorage.setItem(SETTINGS_NAME, JSON.stringify({ ...settings }));
}
