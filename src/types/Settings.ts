import type { SelectedSets } from "./SelectedSets";
import type { ExpansionName } from "./ExpansionName";
import type { PlayerCount } from "./PlayerCount";

export interface Settings {
  selectedSets: SelectedSets;
  activeExpansions: ExpansionName[];
  collapsed: {
    expansionSelect: boolean;
  };
  playerCount: PlayerCount;
  isPreRelease?: boolean;
}
