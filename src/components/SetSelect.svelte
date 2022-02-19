<script lang="ts">
  import {settings} from "../store";
  import { getRandom } from "../utils";

  export let filteredPacks: string[];
  export let previouslySelectedTypeName: string = undefined;
  export let limit: number;
  export let typeName: string;

  export let title;
  export let color = "pink";
  export let colorIntensity = "600";
  export let leadingColor = "white";

  let selectedPacks: string[];
  let previouslySelectedPacks: string[];

  function updateSelectedPacks(set: string) {
    settings.update(settings => {
      const indexOf = selectedPacks.indexOf(set);
      if (indexOf >= 0) {
        selectedPacks.splice(indexOf, 1);
      } else {
        selectedPacks.push(set);
      }
      const update = {
        ...settings,
        selectedSets: {
          ...settings.selectedSets,
          [typeName]: selectedPacks
        }
      };
      return update; 
    })
  }

  function randomise() {
    settings.update(settings => ({
        ...settings,
        selectedSets: {
          ...settings.selectedSets,
          [typeName]: getRandom(filteredPacks, limit, previouslySelectedPacks)
        }
      }));
  }

  settings.subscribe(settings => {
    selectedPacks = settings.selectedSets[typeName];
    previouslySelectedPacks = settings.selectedSets[previouslySelectedTypeName] || [];
  });
</script>

<div class="mx-4 py-6 sm:px-6 lg:px-8">
  <div class="bg-white overflow-hidden shadow rounded-lg">
    <div class="px-4 py-5 sm:p-6">
      <div class="my-2 pb-5 border-b border-gray-200 flex">
        <h4 class="text-lg leading-6 font-medium text-gray-900">
          {title} <span class="text-md">({limit})</span>
        </h4>
        {#if selectedPacks.length < limit}
          <div
            class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800 ml-2.5"
          >
            Incomplete
            <span class="text-xs">
              &nbsp;({limit - selectedPacks.length} selections remaining)</span
            >
          </div>
        {:else}
          <div
            class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 ml-2.5"
          >
            Complete
          </div>
        {/if}
        <button
          type="button"
          class="inline-flex items-center ml-auto mr-1 px-2 border border-transparent text-base rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 bg-yellow-200 text-yellow-800 hover:bg-yellow-300 focus:ring-yellow-500"
          on:click={randomise}>Random</button
        >
      </div>
      <ul
        class="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {#each filteredPacks as set}
          <li class="col-span-1 flex shadow-sm rounded-md">
            <div
              class={`flex-shrink-0 flex items-center justify-center w-16 text-${leadingColor} text-sm font-medium rounded-l-md bg-${color}-${colorIntensity}`}
            >
              {set[0]}
            </div>
            <div
              class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate"
            >
              <div class="flex-1 px-4 py-2 text-sm truncate">
                <p class="text-gray-500">{set}</p>
              </div>

              <div class="ml-3 flex items-center h-5 mr-3">
                <input
                  on:change={() => updateSelectedPacks(set)}
                  checked={selectedPacks.includes(set)}
                  id={set}
                  name={set}
                  disabled={previouslySelectedPacks.includes(set) || (!selectedPacks.includes(set) &&
                    selectedPacks.length >= limit)}
                  type="checkbox"
                  class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
              </div>
            </div>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</div>
