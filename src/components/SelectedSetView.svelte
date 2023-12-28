<script lang="ts">
  import type { SelectedSets } from "../types";

  export let selectedSets: SelectedSets;
</script>

<div class="mt-4 bg-white shadow rounded-lg">
  <div class="px-4 py-5 sm:p-6">
    <div class="my-2 pb-5 border-b border-gray-200">
      <h3 class="text-lg leading-6 font-medium text-gray-900">Selected Sets</h3>
    </div>
    <div>
      <p>
        <strong>Expansion Sets</strong>: {selectedSets.expansionPacks.length > 0
          ? selectedSets.expansionPacks.sort().join(", ")
          : "None"}
      </p>
      <p>
        <strong>Premium Sets</strong>: {selectedSets.premiumPacks.length > 0
          ? selectedSets.premiumPacks.sort().join(", ")
          : "None"}
      </p>
      <p>
        <strong>Master Sets</strong>: {selectedSets.masterPacks.length > 0
          ? selectedSets.masterPacks.sort().join(", ")
          : "None"}
      </p>
      <p>
        <strong>Bronze Fusion Promos</strong>: {selectedSets.bronzePromos
          .length > 0
          ? selectedSets.bronzePromos.sort().join(", ")
          : "None"}
      </p>
      <p>
        <strong>Silver Fusion Promos</strong>: {selectedSets.silverPromos
          .length > 0
          ? selectedSets.silverPromos.sort().join(", ")
          : "None"}
      </p>
      <p>
        <strong>Gold Fusion Promos</strong>: {selectedSets.goldPromos.length > 0
          ? selectedSets.goldPromos.sort().join(", ")
          : "None"}
      </p>
      <p>
        <strong>Prize Support</strong>: {selectedSets.bronzePromoPrize.concat(
          selectedSets.silverPromoPrize,
        ).length > 0
          ? selectedSets.bronzePromoPrize
              .concat(selectedSets.silverPromoPrize)
              .join(", ")
          : "None"}
      </p>

      <p>
        <strong>Metagame</strong>: {selectedSets.metagameSets.length > 0
          ? selectedSets.metagameSets.sort().join(", ")
          : "None"}
      </p>
    </div>
  </div>
</div>
