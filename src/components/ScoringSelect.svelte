<script lang="ts">
  import {settings} from "../store";
import type { PlayerCount } from "../types/PlayerCount";

  let playerCount: PlayerCount;
  let isPrelease: boolean;
  let collapsed: boolean = false;
  let playerCountShadow: PlayerCount;

  function playerCountChange() {
      settings.update(settings => ({
          ...settings,
          playerCount: playerCountShadow
      }));
  }

  function toggleCollapse() {
    collapsed = !collapsed;
  }

  function togglePrerelease() {
    settings.update(settings => ({...settings, isPreRelease: !isPrelease}))
  }
  
  settings.subscribe(settings => {
    playerCount = settings.playerCount;
    playerCountShadow = playerCount;
    isPrelease = settings.isPreRelease ?? false;
  });
</script>

<div class="bg-white overflow-hidden shadow rounded-lg">
  <div class="px-2 py-3 sm:p-6">
    <div class="my-1 pb-2 border-b border-gray-200">
      <h3 class="text-md leading-3 font-medium text-gray-900">
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
        Options
      </h3>
    </div>
    {#if !collapsed}
    <div>
      <div>
        <label for="players" class="block text-sm font-medium text-gray-700">Number of players</label>
        <select bind:value="{playerCountShadow}" on:change="{playerCountChange}" id="players" name="players" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
            {#each [1, 2, 3, 4, 5, 6] as count}
                <option selected='{playerCount === count}'>{count}</option>
            {/each}
        </select>
        </div>
        <div class="mx-1 my-1 flex items-center justify-between">
        <span class="flex-grow flex flex-col">
            <span class="text-sm font-medium text-gray-900" id="availability-label">With pre-release tournament</span>
            <span class="text-sm text-gray-500" id="availability-description">A pre-release tournament is an initial tournament worth less overall victory points, designed for new players.</span>
        </span>
        
        <button
          on:click={togglePrerelease}
          type="button"
          class="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 {!isPrelease ? 'bg-gray-200' : 'bg-indigo-600'}"  
          role="switch" aria-checked="false"
          >
            <span aria-hidden="true" class="pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 {!isPrelease ? 'translate-x-0' : 'translate-x-5'} "></span>
          
        </button>
        </div>

    </div>
    {/if}
  </div>
</div>
