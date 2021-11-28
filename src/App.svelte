<script lang="ts">
  import { onMount } from "svelte";

  import { expansions } from "./expansions";
  import type { ExpansionName, Expansion, SelectedSets, PresetOption } from "./models";

  import Header from "./Header.svelte";
  import ExpansionSelect from "./ExpansionSelect.svelte";
  import SetSelect from "./SetSelect.svelte";
  import Countdown from "./Countdown.svelte";
  import PresetSelector from "./PresetSelector.svelte";

  import { SELECT_COUNTS, SETTINGS_NAME } from "./constants";
  import {settings} from "./store";

  
  let activeExpansions: ExpansionName[];
  let filteredExpansions: Expansion[];
  let selectedSets: SelectedSets;

  function filter(activeExpansions: ExpansionName[]) {
    return expansions.filter((e: Expansion) => 
      activeExpansions.length === 0 ? true : activeExpansions.includes(e.name));
  }

  function handleExpansionChange({ detail }) {
    settings.update(settings => {
      const indexOf = settings.activeExpansions.indexOf(detail.expansion);
      const activeExpansions = settings.activeExpansions;
      if (indexOf >= 0) {
        activeExpansions.splice(indexOf, 1);
      } else {
        activeExpansions.push(detail.expansion);
      }
      return {
        ...settings,
        activeExpansions
      }
    });

    persist();
  }

  function handlePresetSelect({detail}) {
    const presetOption : PresetOption = detail.preset;
    settings.update(settings => {
      return {
        ...settings,
        selectedSets: presetOption.preset
      }
    });
    
    persist();
  }

  function handleSetChange(_) {
    persist();
  }

  const persist = (): void => {
    localStorage.setItem(
      SETTINGS_NAME,
      JSON.stringify({activeExpansions, selectedSets})
    );
  };

  onMount(async () => {
    settings.subscribe(settings => {    
      activeExpansions = settings.activeExpansions;
      selectedSets = settings.selectedSets;
      filteredExpansions = filter(activeExpansions);
    })

  });
</script>

<main>
  <Header />
  <Countdown />
  {#if activeExpansions && filteredExpansions}
    <header class="bg-white shadow">
      <div class="py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold leading-tight text-gray-900">
          Millenium Blades Sets
        </h1>
      </div>
    </header>
    <div class="mx-4 py-6 sm:px-6 lg:px-8">
      <ExpansionSelect
        on:expansionchange={handleExpansionChange}
      />

      <div class="mt-4 bg-white shadow rounded-lg">
        <div class="px-4 py-5 sm:p-6">
          <div class="my-2 pb-5 border-b border-gray-200">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Selected Sets
            </h3>

          <PresetSelector on:presetselect={handlePresetSelect} />
          </div>
          <div>
            <p>
              <strong>Expansion Sets</strong>: {selectedSets.expansionPacks
                .length > 0
                ? selectedSets.expansionPacks.sort().join(", ")
                : "None"}
            </p>
            <p>
              <strong>Premium Sets</strong>: {selectedSets.premiumPacks.length >
              0
                ? selectedSets.premiumPacks.sort().join(", ")
                : "None"}
            </p>
            <p>
              <strong>Master Sets</strong>: {selectedSets.masterPacks.length > 0
                ? selectedSets.masterPacks.sort().join(", ")
                : "None"}
            </p>
            <p>
              <strong>Bronze Promos</strong>: {selectedSets.bronzePromos
                .length > 0
                ? selectedSets.bronzePromos.sort().join(", ")
                : "None"}
            </p>
            <p>
              <strong>Silver Promos</strong>: {selectedSets.silverPromos
                .length > 0
                ? selectedSets.silverPromos.sort().join(", ")
                : "None"}
            </p>
            <p>
              <strong>Gold Promos</strong>: {selectedSets.goldPromos.length > 0
                ? selectedSets.goldPromos.sort().join(", ")
                : "None"}
            </p>
            <p>
              <strong>Prize Support</strong>: {selectedSets.bronzePromoPrize.concat(selectedSets.silverPromoPrize).length > 0
                ? selectedSets.bronzePromoPrize.concat(selectedSets.silverPromoPrize).join(", ")
                : "None"}
            </p>
          </div>
        </div>
      </div>

      <SetSelect
        filteredPacks={filteredExpansions
          .flatMap((e) => e.expansionPacks)
          .sort()}
        title="Expansion Sets"
        color="green"
        colorIntensity="200"
        leadingColor="gray-600"
        typeName="expansionPacks"
        limit={SELECT_COUNTS.expansionPacks}
        on:setchange={handleSetChange}
      />

      <SetSelect
        filteredPacks={filteredExpansions.flatMap((e) => e.premiumPacks).sort()}
        title="Premium Sets"
        color="blue"
        colorIntensity="50"
        leadingColor="gray-600"
        typeName="premiumPacks"
        limit={SELECT_COUNTS.premiumPacks}
        on:setchange={handleSetChange}
      />

      <SetSelect
        filteredPacks={filteredExpansions.flatMap((e) => e.masterPacks).sort()}
        title="Master Sets"
        color="purple"
        colorIntensity="300"
        typeName="masterPacks"
        limit={SELECT_COUNTS.masterPacks}
        on:setchange={handleSetChange}
      />

      <SetSelect
        filteredPacks={filteredExpansions.flatMap((e) => e.bronzePromos).sort()}
        title="Bronze Promos"
        color="yellow"
        colorIntensity="700"
        typeName="bronzePromos"
        limit={SELECT_COUNTS.bronzePromos}
        previouslySelectedTypeName="bronzePromoPrize"
        on:setchange={handleSetChange}
      />

      <SetSelect
        filteredPacks={filteredExpansions.flatMap((e) => e.silverPromos).sort()}
        title="Silver Promos"
        color="gray"
        colorIntensity="200"
        leadingColor="gray-600"
        typeName="silverPromos"
        limit={SELECT_COUNTS.silverPromos}
        previouslySelectedTypeName="silverPromoPrize"
        on:setchange={handleSetChange}
      />

      <SetSelect
        filteredPacks={filteredExpansions.flatMap((e) => e.goldPromos).sort()}
        title="Gold Promos"
        color="yellow"
        colorIntensity="300"
        typeName="goldPromos"
        limit={SELECT_COUNTS.goldPromos}
        on:setchange={handleSetChange}
      />

      <SetSelect
        filteredPacks={filteredExpansions.flatMap((e) => e.bronzePromos).sort()}
        title="Bronze Promo Prize Support"
        color="yellow"
        colorIntensity="700"
        previouslySelectedTypeName="bronzePromos"
        limit={SELECT_COUNTS.bronzePromoPrize}
        typeName="bronzePromoPrize"
        on:setchange={handleSetChange}
      />

      <SetSelect
        filteredPacks={filteredExpansions.flatMap((e) => e.silverPromos).sort()}
        title="Silver Promo Prize Support"
        color="gray"
        colorIntensity="200"
        previouslySelectedTypeName="silverPromos"
        typeName="silverPromoPrize"
        limit={SELECT_COUNTS.silverPromoPrize}
        on:setchange={handleSetChange}
      />

    </div>
  {/if}
</main>
