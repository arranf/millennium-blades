import type { ExpansionName } from "./ExpansionName";
import type { SelectedSets } from "./SelectedSets";

export interface PresetOption {
  name: string;
  order: number;
  description: string;
  requiredExpansions: ExpansionName[];
  preset: SelectedSets;
}
