export const enum ExpansionName {
  BASE_GAME = "Base Game",
  SET_ROATION = "Set Rotation",
  CROSSOVER = "Crossover: Mini Expansion #1",
  SPONSORS = "Sponsors: Mini Expansion #2",
  FUSION_CHAOS = "Fusion Chaos: Mini Expansion #3",
  FINAL_BOSSES = "Final Bosses: Mini Expansion #4",
  PROFESSIONALS = "Professionals: Mini Expansion #6",
  FUTURES = "Futures: Mini Expansion #5",
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
}

export interface SelectedSets {
  bronzePromos: string[];
  silverPromos: string[];
  goldPromos: string[];
  expansionPacks: string[];
  premiumPacks: string[];
  masterPacks: string[];
}
