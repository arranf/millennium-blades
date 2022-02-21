
export interface Sets {
  bronzePromos: string[];
  silverPromos: string[];
  goldPromos: string[];
  expansionPacks: string[];
  premiumPacks: string[];
  masterPacks: string[];
  metagameSets: string[];
}

export type SetName = keyof Sets;
