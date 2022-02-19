<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { PresetOption } from "../types";
  import {presets} from "../data/presets";

  let dropdownActive: boolean = false;
  const dispatch = createEventDispatcher();

  function setPreset(preset: PresetOption) {
    // TODO: What if selected and an expansion is not "owned"?
    dispatch("presetselect", {preset});
    dropdownActive = false;
  }

  function handleClickOutside() {
    dropdownActive = false;
  } 
  
  
  function clickOutside(node) {
      const handleClick = event => {
        if (node && !node.contains(event.target) && !event.defaultPrevented) {
          node.dispatchEvent(
            new CustomEvent('click_outside', node)
          )
        }
      }

      document.addEventListener('click', handleClick, true);
      
      return {
        destroy() {
          document.removeEventListener('click', handleClick, true);
        }
      }
  }
</script>

  <div>
    <div class="relative">
      <div class="inline-flex shadow-sm rounded-md divide-x divide-white-200">
        <div class="relative z-0 inline-flex shadow-sm rounded-md divide-x divide-white-200">
          <div class="relative inline-flex items-center bg-indigo-500 py-2 pl-3 pr-4 border border-transparent rounded-l-md shadow-sm text-white">
            <p class="ml-2.5 text-sm">
              Select Preset Store Build
            </p>
          </div>
          <button on:click={() => dropdownActive = !dropdownActive} type="button" class="relative inline-flex items-center bg-indigo-500 p-2 rounded-l-none rounded-r-md text-sm font-medium text-gray-800 hover:bg-indigo-600 focus:outline-none focus:z-10 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-200" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
            <!-- Heroicon name: solid/chevron-down -->
            <svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      {#if dropdownActive}
      <ul use:clickOutside on:click_outside={handleClickOutside} class="origin-top-right absolute z-100 left-0 mt-2 w-72 max-h-60 rounded-md shadow-lg overflow-y-auto bg-white divide-y divide-gray-200 ring-1 ring-black ring-opacity-5 focus:outline-none" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-0">
        {#each presets as preset }
        <li on:click={() => setPreset(preset)} class="text-gray-900 cursor-default select-none relative p-2 text-sm" role="option">
          <div class="flex flex-col">
            <div class="flex justify-between">
              <p class="font-normal">
                {preset.name}
                
                {#if preset.requiredExpansions.length > 0}
                <span
                class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-yellow-200 text-yellow-800"
                >
                {preset.requiredExpansions.join(', ')}
              </span>
              {/if}
            </p>
            </div>
            <p class="text-gray-500 mt-1 text-xs">
              {preset.description}
            </p>
          </div>
        </li>

        {/each}
      </ul>
      {/if}
    </div>
  </div>