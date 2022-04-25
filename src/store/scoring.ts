import { writable } from "svelte/store";
import type { Writable } from "svelte/store";
import type { Scoring } from "../types/Scoring";

export const scoring: Writable<Scoring> = writable({
  collectionOne: [],
  tournamentOne: [],
  collectionTwo: [],
  tournamentTwo: [],
  collectionThree: [],
  tournamentThree: [],
  friendship: [],
  npcs: [],
});
