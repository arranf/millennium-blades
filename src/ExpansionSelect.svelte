<script lang="ts">
  import { createEventDispatcher } from "svelte";
	import { scale } from 'svelte/transition';

  import { ExpansionName } from "./models";
  import {settings} from "./store";

  let activeExpansions: ExpansionName[];
  let collapsed: boolean = false;

  const dispatch = createEventDispatcher();

  function toggleExpansion(expansion: ExpansionName) {
    dispatch("expansionchange", { expansion });
  }

  settings.subscribe(settings => {
    activeExpansions = settings.activeExpansions;
  });

</script>

<div class="bg-white overflow-hidden shadow rounded-lg">
  <div class="px-2 py-3 sm:p-6">
    <div class="my-1 pb-2 border-b border-gray-200">
      <h3 class="text-md leading-3 font-medium text-gray-900">
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
        Expansions
      </h3>
    </div>
    {#if !collapsed}
    <div transition:scale>
      {#each Object.values(ExpansionName) as expansion}
        <button
          on:click={() => toggleExpansion(expansion)}
          type="button"
          disabled={expansion == ExpansionName.BASE_GAME}
          class="inline-flex items-center mx-1 my-1 px-2 py-1 border border-transparent text-base font-small rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 {activeExpansions.includes(
            expansion
          )
            ? 'bg-green-500 hover:bg-green-600 focus:ring-green-600 '
            : 'bg-indigo-500 hover:bg-indigo-600 focus:ring-indigo-600 '}
            {expansion == ExpansionName.BASE_GAME ? 'cursor-not-allowed' : ''}"
          >{expansion}</button
        >
      {/each}
    </div>
    {/if}
  </div>
</div>
