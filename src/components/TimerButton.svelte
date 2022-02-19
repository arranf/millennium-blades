<script lang="ts">

  import {timer, TimerStatus, toggleTimer} from '../store';
  export let minutes: number;
  let timerStatus : TimerStatus;
  let timerDuration: number | undefined;
  let isDisabled: boolean = false;
  let classString = getClass();
    timer.subscribe(timer => {
      timerStatus = timer.timerStatus;
      timerDuration = timer.minutesDuration;
      isDisabled = timerStatus !== TimerStatus.Cancelled && !!timerDuration && minutes != timerDuration
      classString = getClass();
    });

    function getClass() {
      if (isDisabled) {
        return "text-gray-500 px-3 py-2 rounded-md text-sm disabled:opacity-50"
      }
      return "text-gray-300 px-3 py-2 rounded-md text-sm hover:bg-gray-700 hover:text-white"
    }

</script>

<div
  class={classString}
>
    <button 
  disabled='{isDisabled}' class="font-medium" type="button" on:click={(_) =>  toggleTimer(minutes)}
      >
      {#if timerStatus === TimerStatus.Paused && !isDisabled}
        Resume Timer
      {:else if timerStatus === TimerStatus.Started && !isDisabled}
        Pause Timer
      {:else}
        Start <span class="font-bold">{minutes}</span> Minute Timer
      {/if}
      </button>
 </div>
