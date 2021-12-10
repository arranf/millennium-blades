<script lang="ts">
	import { scale } from 'svelte/transition';

  import type { SelectedSets } from "./models";

  export let selectedSets: SelectedSets;

  let collapsed: boolean = false;
</script>

 <div class="mt-4 bg-white shadow rounded-lg">
        <div class="px-4 py-5 sm:p-6">
          <div class="my-2 pb-5 border-b border-gray-200">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              <button on:click={() => collapsed = !collapsed}>
                {#if collapsed}
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clip-rule="evenodd" />
                  </svg>
                {:else}
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clip-rule="evenodd" />
                  </svg>
                {/if}
              </button>
              Selected Sets
            </h3>


          </div>
          {#if !collapsed}
            <div transition:scale>
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
                <strong>Prize Support</strong>: {selectedSets.bronzePromoPrize.concat(selectedSets.silverPromoPrize).length > 0
                  ? selectedSets.bronzePromoPrize.concat(selectedSets.silverPromoPrize).join(", ")
                  : "None"}
              </p>
            </div>
          {/if}
        </div>
      </div>