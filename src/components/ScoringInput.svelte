<script lang="ts">
  import {scoring, settings} from "../store";
  import type { PlayerCount } from "../types/PlayerCount";

  let columnCount: PlayerCount;
  let isPrelease: boolean;

  function togglePrerelease() {
    settings.update(settings => ({...settings, isPreRelease: !isPrelease}))
  }
  
  settings.subscribe(settings => {
    columnCount = settings.playerCount;
    isPrelease = settings.isPreRelease ?? false;
  });
</script>

<div class="my-1 bg-white overflow-hidden shadow rounded-lg">
  <div class="px-2 py-3 sm:p-6">
    <div class="my-1 pb-2 border-b border-gray-200">
      <h3 class="text-md leading-3 font-medium text-gray-900">
        Scoring
      </h3>
    </div>
    <div >
      <div class="flex">
          <input name="sa"/>
      </div>
      
    </div>
  </div>
</div>
