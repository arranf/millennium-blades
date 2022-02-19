import type { SelectedSets } from "./SelectedSets";
import type { ExpansionName } from "./ExpansionName";

export interface Settings {
  selectedSets: SelectedSets;
  activeExpansions: ExpansionName[];
  collapsed: {
    expansionSelect: boolean;
  };
}
