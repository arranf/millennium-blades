export const enum ExpansionName {
  BASE_GAME = "Base Game",
  SET_ROTATION = "Set Rotation",
  COLLUSION = "Collusion",
  CROSSOVER = "Crossover: Mini Expansion #1",
  SPONSORS = "Sponsors: Mini Expansion #2",
  FUSION_CHAOS = "Fusion Chaos: Mini Expansion #3",
  FINAL_BOSSES = "Final Bosses: Mini Expansion #4",
  FUTURES = "Futures: Mini Expansion #5",
  PROFESSIONALS = "Professionals: Mini Expansion #6",
  CROSSOVER_2 = "Crossovers 2: Mini Expansion #7",
  CROSSOVER_3 = "Crossovers 3: Mini Expansion #8",
  CO_OP_BOSSES = "Co-Op Bosses: Mini Expansion #9", // Currently unused - it's just co op bosses
  EXTRA_CHARACTERS = "Extra Characters: Mini Expansion #10",
  EXTRA_SETS = "Extra Sets: Mini Expansion #11",
  FINALER_BOSSES = "Finaler Bosses: Mini Expansion #12",
  BOARD_GAME_GEEK = "BoardGameGeek Mini Expansion",
  // DICE_TOWER = "Dice Tower Mini Expansion", // Currently unused - it's just a core set card
}

export interface Expansion {
  name: ExpansionName;
  order: number;
  characters: string[];
  starterDecks: string[];
  bronzePromos: string[];
  silverPromos: string[];
  goldPromos: string[];
  expansionPacks: string[];
  premiumPacks: string[];
  masterPacks: string[];
  metagameSets: string[];
}

export interface SelectedSets {
  bronzePromos: string[];
  silverPromos: string[];
  goldPromos: string[];
  expansionPacks: string[];
  premiumPacks: string[];
  masterPacks: string[];
  bronzePromoPrize: string[];
  silverPromoPrize: string[];
  metagameSets: string[];
}

export interface Sets {
  bronzePromos: string[];
  silverPromos: string[];
  goldPromos: string[];
  expansionPacks: string[];
  premiumPacks: string[];
  masterPacks: string[];
  metagameSets: string[];
}

export interface Settings {
  selectedSets: SelectedSets;
  activeExpansions: ExpansionName[];
  collapsed: {
    expansionSelect: boolean;
  };
}

export interface PresetOption {
  name: string;
  order: number;
  description: string;
  requiredExpansions: ExpansionName[];
  preset: SelectedSets;
}