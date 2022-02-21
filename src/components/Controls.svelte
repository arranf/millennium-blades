<script lang="ts">
  
  import type { PresetOption, Sets, SelectedSets } from "../types";
  
  import PresetSelector from "./PresetSelector.svelte";
  
  import { SELECT_COUNTS } from "../constants";
  import {settings} from "../store";
  import { getRandom } from "../utils";

  export let possibleSets: Sets;

  function handlePresetSelect({detail}: {detail: {preset: PresetOption}}) {
      const presetOption = detail.preset;
      settings.update(settings => {
      return {
          ...settings,
          selectedSets: {...presetOption.preset, metagameSets: settings.selectedSets.metagameSets}
      }
      });
  }

  function randomiseAll() {
    const bronzePromoPrize = getRandom(possibleSets.bronzePromos, SELECT_COUNTS.bronzePromoPrize);
    const silverPromoPrize = getRandom(possibleSets.silverPromos, SELECT_COUNTS.silverPromoPrize);

    const selectedSets : SelectedSets = {
      bronzePromos: getRandom(possibleSets.bronzePromos, SELECT_COUNTS.bronzePromos, bronzePromoPrize),
      silverPromos: getRandom(possibleSets.silverPromos, SELECT_COUNTS.silverPromos, silverPromoPrize),
      goldPromos: getRandom(possibleSets.goldPromos, SELECT_COUNTS.goldPromos),
      expansionPacks: getRandom(possibleSets.expansionPacks, SELECT_COUNTS.expansionPacks),
      premiumPacks: getRandom(possibleSets.premiumPacks, SELECT_COUNTS.premiumPacks),
      masterPacks: getRandom(possibleSets.masterPacks, SELECT_COUNTS.masterPacks),
      bronzePromoPrize,
      silverPromoPrize,
      metagameSets: getRandom(possibleSets.metagameSets, SELECT_COUNTS.metagame)
    };

    settings.update(settings => ({
        ...settings,
        selectedSets
      }));
  }
</script>

<div class="mx-4 py-6 sm:px-6 lg:px-8">
  <div class="bg-white shadow rounded-lg">
    <div class="px-4 py-5 sm:p-6">


      <div class="w-full max-w flex justify-start content-start">    
        <PresetSelector on:presetselect={handlePresetSelect} />
        <button 
            class="ml-2 mr-1 px-2 border border-transparent text-base rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 bg-indigo-200 text-indigo-800 hover:bg-indigo-300 focus:ring-indigo-500"
            on:click={() => randomiseAll()}>
            Randomise All
        </button>
      </div>
    </div>  
  </div>
</div>