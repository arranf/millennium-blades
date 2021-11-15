<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { ExpansionName } from "./models";
  import {settings} from "./store";

  let activeExpansions: ExpansionName[];

  const dispatch = createEventDispatcher();

  function toggleExpansion(expansion: ExpansionName) {
    dispatch("expansionchange", { expansion });
  }

  settings.subscribe(settings => {
    activeExpansions = settings.activeExpansions;
  });

</script>

<!-- TODO: Make collapsable -->
<div class="bg-white overflow-hidden shadow rounded-lg">
  <div class="px-2 py-3 sm:p-6">
    <div class="my-1 pb-2 border-b border-gray-200">
      <h3 class="text-md leading-3 font-medium text-gray-900">Expansions</h3>
    </div>

    <div>
      {#each Object.values(ExpansionName) as expansion}
        <button
          on:click={() => toggleExpansion(expansion)}
          type="button"
          disabled={expansion == ExpansionName.BASE_GAME}
          class="inline-flex items-center mx-1 my-1 px-2 py-1 border border-transparent text-base font-small rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 {activeExpansions.includes(
            expansion
          )
            ? 'bg-green-600 hover:bg-green-700 focus:ring-green-500 '
            : 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 '}
            {expansion == ExpansionName.BASE_GAME ? 'cursor-not-allowed' : ''}"
          >{expansion}</button
        >
      {/each}
    </div>
  </div>
</div>
