import type { ExpansionName } from "./ExpansionName";


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
