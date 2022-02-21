import type { Sets } from "./Sets";

export interface SelectedSets extends Sets {
  bronzePromoPrize: string[];
  silverPromoPrize: string[];
}

export type SelectedSetName = keyof SelectedSets;
