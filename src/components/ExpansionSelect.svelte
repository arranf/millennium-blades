<script lang="ts">
  import { createEventDispatcher } from "svelte";
	
  import { ExpansionName } from "../types";
  import {settings} from "../store";

  let activeExpansions: ExpansionName[];
  let collapsed: boolean = false;

  const dispatch = createEventDispatcher();

  function toggleExpansion(expansion: ExpansionName) {
    dispatch("expansionchange", { expansion });
  }

  function toggleCollapse() {
    settings.update((settings) => {
      return {
        ...settings,
        collapsed: {
          ...settings.collapsed,
          expansionSelect: !settings.collapsed.expansionSelect
        }
      }
    });
  }

  settings.subscribe(settings => {
    activeExpansions = settings.activeExpansions;
    collapsed = settings.collapsed.expansionSelect;
  });
</script>

<div class="bg-white overflow-hidden shadow rounded-lg">
  <div class="px-2 py-3 sm:p-6">
    <div class="my-1 pb-2 border-b border-gray-200">
      <h3 class="text-lg leading-6 font-medium text-gray-900">
        <button on:click={() => toggleCollapse()}>
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
    <div>
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
          >
          {expansion}
        </button>
      {/each}
    </div>
    {/if}
  </div>
</div>
