<script lang="ts">
  import { onMount } from "svelte";

  import { expansions, ExpansionName } from "../data";
  import type { Expansion, Sets, SelectedSets } from "../types";

  import ExpansionSelect from "../components/ExpansionSelect.svelte";
  import SetSelect from "../components/SetSelect.svelte";
  import SetView from "../components/SelectedSetView.svelte";
  import Controls from "../components/Controls.svelte";

  import { SELECT_COUNTS } from "../constants";
  import { settings } from "../store";

  let activeExpansions: ExpansionName[];
  let filteredExpansions: Expansion[];
  let selectedSets: SelectedSets;
  let possibleSets: Sets;

  function filter(activeExpansions: ExpansionName[]) {
    return expansions.filter((e: Expansion) =>
      activeExpansions.length === 0 ? true : activeExpansions.includes(e.name),
    );
  }

  function getPossibleSets(): Sets {
    return {
      bronzePromos: filteredExpansions.flatMap((s) => s.bronzePromos).sort(),
      silverPromos: filteredExpansions.flatMap((s) => s.silverPromos).sort(),
      goldPromos: filteredExpansions.flatMap((s) => s.goldPromos).sort(),
      expansionPacks: filteredExpansions
        .flatMap((s) => s.expansionPacks)
        .sort(),
      premiumPacks: filteredExpansions.flatMap((s) => s.premiumPacks).sort(),
      masterPacks: filteredExpansions.flatMap((s) => s.masterPacks).sort(),
      metagameSets: filteredExpansions.flatMap((s) => s.metagameSets).sort(),
    };
  }

  function handleExpansionChange({
    detail,
  }: {
    detail: { expansion: ExpansionName };
  }) {
    settings.update((settings) => {
      const indexOf = settings.activeExpansions.indexOf(detail.expansion);
      const activeExpansions = settings.activeExpansions;
      if (indexOf >= 0) {
        // TODO: Remove _all_ sets selected from that expansion
        activeExpansions.splice(indexOf, 1);
      } else {
        activeExpansions.push(detail.expansion);
      }
      return {
        ...settings,
        activeExpansions,
      };
    });
    possibleSets = getPossibleSets();
  }

  function handleExpansionsSet({ detail }: { detail: { isAll: boolean } }) {
    settings.update((settings) => {
      let activeExpansions: ExpansionName[] = [];
      if (detail.isAll) {
        activeExpansions = Object.values(ExpansionName).map((e) => e);
      } else {
        activeExpansions = [ExpansionName.BASE_GAME];
      }
      return {
        ...settings,
        activeExpansions,
      };
    });
    possibleSets = getPossibleSets();
  }

  onMount(async () => {
    settings.subscribe((settings) => {
      activeExpansions = settings.activeExpansions;
      selectedSets = settings.selectedSets;
      filteredExpansions = filter(activeExpansions);
      possibleSets = getPossibleSets();
    });
  });
</script>

<div>
  {#if activeExpansions && filteredExpansions && possibleSets}
    <div class="mx-4 py-6 sm:px-6 lg:px-8">
      <ExpansionSelect
        on:selectallornone={handleExpansionsSet}
        on:expansionchange={handleExpansionChange}
      />

      <SetView {selectedSets} />

      <Controls {possibleSets} />
      {#if activeExpansions.includes(ExpansionName.COLLUSION)}
        <SetSelect
          filteredPacks={possibleSets.metagameSets}
          title="Metagame Update"
          color="blue"
          typeName="metagameSets"
          limit={SELECT_COUNTS.metagameSets}
        />
      {/if}
      <SetSelect
        filteredPacks={possibleSets.expansionPacks}
        title="Expansion Sets"
        color="green"
        colorIntensity="200"
        leadingColor="gray-600"
        typeName="expansionPacks"
        limit={SELECT_COUNTS.expansionPacks}
      />

      <SetSelect
        filteredPacks={possibleSets.premiumPacks}
        title="Premium Sets"
        color="blue"
        colorIntensity="50"
        leadingColor="gray-600"
        typeName="premiumPacks"
        limit={SELECT_COUNTS.premiumPacks}
      />

      <SetSelect
        filteredPacks={possibleSets.masterPacks}
        title="Master Sets"
        color="purple"
        colorIntensity="300"
        typeName="masterPacks"
        limit={SELECT_COUNTS.masterPacks}
      />

      <SetSelect
        filteredPacks={possibleSets.bronzePromos}
        title="Bronze Fusion Promos"
        color="yellow"
        colorIntensity="700"
        typeName="bronzePromos"
        limit={SELECT_COUNTS.bronzePromos}
        previouslySelectedTypeName="bronzePromoPrize"
      />

      <SetSelect
        filteredPacks={possibleSets.silverPromos}
        title="Silver Fusion Promos"
        color="gray"
        colorIntensity="200"
        leadingColor="gray-600"
        typeName="silverPromos"
        limit={SELECT_COUNTS.silverPromos}
        previouslySelectedTypeName="silverPromoPrize"
      />

      <SetSelect
        filteredPacks={possibleSets.goldPromos}
        title="Gold Fusion Promos"
        color="yellow"
        colorIntensity="300"
        typeName="goldPromos"
        limit={SELECT_COUNTS.goldPromos}
      />

      <SetSelect
        filteredPacks={possibleSets.bronzePromos}
        title="Bronze Promo Prize Support"
        color="yellow"
        colorIntensity="700"
        previouslySelectedTypeName="bronzePromos"
        limit={SELECT_COUNTS.bronzePromoPrize}
        typeName="bronzePromoPrize"
      />

      <SetSelect
        filteredPacks={possibleSets.silverPromos}
        title="Silver Promo Prize Support"
        color="gray"
        colorIntensity="200"
        previouslySelectedTypeName="silverPromos"
        typeName="silverPromoPrize"
        limit={SELECT_COUNTS.silverPromoPrize}
      />
    </div>
  {/if}
</div>
