<script lang="ts">
  import { onMount } from "svelte";

  import { expansions } from "./expansions";
  import type { ExpansionName, Expansion, SelectedSets } from "./models";

  import Header from "./Header.svelte";
  import ExpansionSelect from "./ExpansionSelect.svelte";
  import SetSelect from "./SetSelect.svelte";

  const SETTINGS_NAME = "mb-settings";

  const SELECT_COUNTS = {
    bronzePromos: 2,
    silverPromos: 2,
    goldPromos: 1,
    expansionPacks: 6,
    premiumPacks: 5,
    masterPacks: 4,
  };

  let loading = false;
  let loadingCancel;

  let activeExpansions: ExpansionName[];
  let filteredExpansions: Expansion[];
  let selectedSets: SelectedSets;

  function filter(expansions: Expansion[]) {
    let filtered = expansions.filter((e: Expansion) =>
      activeExpansions.length === 0 ? true : activeExpansions.includes(e.name)
    );
    return filtered;
  }

  function handleExpansionChange({ detail }) {
    const indexOf = activeExpansions.indexOf(detail.expansion);
    if (indexOf >= 0) {
      activeExpansions.splice(indexOf, 1);
    } else {
      activeExpansions.push(detail.expansion);
    }

    activeExpansions = activeExpansions;
    filteredExpansions = filter(expansions);

    persist();
  }

  function handleSetChange({ detail }) {
    persist();
  }

  const persist = (): void => {
    loading = true;
    if (loadingCancel) {
      clearTimeout(loadingCancel);
    }
    localStorage.setItem(
      SETTINGS_NAME,
      JSON.stringify({ activeExpansions, selectedSets })
    );
    loadingCancel = setTimeout(() => (loading = false), 400);
  };

  function getSettings(): {
    activeExpansions: ExpansionName[];
    selectedSets: SelectedSets;
  } {
    return (
      JSON.parse(localStorage.getItem(SETTINGS_NAME)) || {
        activeExpansions: [],
        selectedSets: {
          bronzePromos: [],
          silverPromos: [],
          goldPromos: [],
          expansionPacks: [],
          premiumPacks: [],
          masterPacks: [],
        },
      }
    );
  }

  onMount(async () => {
    loading = true;
    let settings = getSettings();
    activeExpansions = settings.activeExpansions;
    selectedSets = settings.selectedSets;
    filteredExpansions = filter(expansions);

    loadingCancel = setTimeout(() => (loading = false), 400);
  });
</script>

<main>
  <Header />
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
        {activeExpansions}
        on:expansionchange={handleExpansionChange}
      />

      <div class="mt-4 bg-white overflow-hidden shadow rounded-lg">
        <div class="px-4 py-5 sm:p-6">
          <div class="my-2 pb-5 border-b border-gray-200">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Selected Sets
            </h3>
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
        bind:selectedPacks={selectedSets.expansionPacks}
        limit={SELECT_COUNTS.expansionPacks}
        on:setchange={handleSetChange}
      />

      <SetSelect
        filteredPacks={filteredExpansions.flatMap((e) => e.premiumPacks).sort()}
        title="Premium Sets"
        color="blue"
        colorIntensity="50"
        leadingColor="gray-600"
        bind:selectedPacks={selectedSets.premiumPacks}
        limit={SELECT_COUNTS.premiumPacks}
        on:setchange={handleSetChange}
      />

      <SetSelect
        filteredPacks={filteredExpansions.flatMap((e) => e.masterPacks).sort()}
        title="Master Sets"
        color="purple"
        colorIntensity="300"
        bind:selectedPacks={selectedSets.masterPacks}
        limit={SELECT_COUNTS.masterPacks}
        on:setchange={handleSetChange}
      />

      <SetSelect
        filteredPacks={filteredExpansions.flatMap((e) => e.bronzePromos).sort()}
        title="Bronze Promos"
        color="yellow"
        colorIntensity="700"
        bind:selectedPacks={selectedSets.bronzePromos}
        limit={SELECT_COUNTS.bronzePromos}
        on:setchange={handleSetChange}
      />

      <SetSelect
        filteredPacks={filteredExpansions.flatMap((e) => e.silverPromos).sort()}
        title="Silver Promos"
        color="gray"
        colorIntensity="200"
        leadingColor="gray-600"
        bind:selectedPacks={selectedSets.silverPromos}
        limit={SELECT_COUNTS.silverPromos}
        on:setchange={handleSetChange}
      />

      <SetSelect
        filteredPacks={filteredExpansions.flatMap((e) => e.goldPromos).sort()}
        title="Gold Promos"
        color="yellow"
        colorIntensity="300"
        bind:selectedPacks={selectedSets.goldPromos}
        limit={SELECT_COUNTS.goldPromos}
        on:setchange={handleSetChange}
      />
    </div>
  {/if}
</main>
