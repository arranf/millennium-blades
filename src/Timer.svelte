<script lang="ts">
import type { Writable } from 'svelte/store';


  import {Timer, timer} from './store';
  export let minutes: number;


  function startTimer() {
    timer.update((t: Writable<Timer>) => ({...t, timeLeft: minutes * 60 * 1000 + 1000, timer: setInterval(updateClock, 1000)})); // Extra 1000 seconds because we begin by decrementing
    updateClock();
  }

  function updateClock() {
    timer.update((t: Writable<Timer>)  => {
      if (t.timeLeft <= 0) {
        return {...t, timeLeft: -1};
      } else {
        const remainingMs = t.timeLeft - 1000;
  
        const seconds = Math.floor((remainingMs / 1000) % 60);
        return {
          ...t,
          timeLeft: remainingMs,
          minutesLeft:  Math.floor((remainingMs / 60 / 1000) % 60),
          secondsLeft: seconds.toString().length > 1 ? seconds.toString() : `0${seconds}`
        }
      }
      
      
    });
  }
</script>

<div
  class="text-gray-300 px-3 py-2 rounded-md text-sm hover:bg-gray-700 hover:text-white"
>
    <button class="font-medium " type="button" on:click={startTimer}
      >Start <span class="font-bold">{minutes}</span> Minute Timer</button
    >
 </div>
