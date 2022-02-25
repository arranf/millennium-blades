import { MetagameSet } from "./data";
import type { SelectedSetName } from "./types";

export const SETTINGS_NAME = "mb-settings";

export const SELECT_COUNTS: Record<SelectedSetName, number> = {
  bronzePromos: 1,
  silverPromos: 1,
  goldPromos: 1,
  expansionPacks: 6,
  premiumPacks: 5,
  masterPacks: 4,
  bronzePromoPrize: 1,
  silverPromoPrize: 1,
  metagameSets: 2,
};

export const DEFAULT_METAGAME_SETS: Array<MetagameSet> = [
  MetagameSet.ELEMENT,
  MetagameSet.TYPE,
];
