<script lang="ts">
  import { get } from 'svelte/store';

  import {Timer, timer} from './store';
  export let minutes: number;


  enum TimerStatus {
    Cancelled = 'Cancelled',
    Started = 'Started',
    Paused = 'Paused'
  } 

  let timerStatus: TimerStatus = TimerStatus.Cancelled;


  function toggleTimer() {
    switch (timerStatus) {
      case TimerStatus.Cancelled:
        startTimer();
        return;
      case TimerStatus.Paused:
        resumeTimer();
        return;
      case TimerStatus.Started:
        pauseTimer();
        return;
    }
  }

  function startTimer() {
    timerStatus = TimerStatus.Started;
    const currentTimer = get(timer);
    if (currentTimer.timer) {
      return;
    }

    timer.update((t: Timer) => ({...t, timeLeft: (Math.round((minutes * 60 * 1000)/1000)*1000) + 1000, timer: setInterval(updateClock, 1000)})); // Extra 1000 seconds because we begin by decrementing
    updateClock();
  }


  function pauseTimer() {
    const currentTimer = get(timer);
    clearTimeout(currentTimer.timer);
    timerStatus = TimerStatus.Paused;
  }

  function resumeTimer() {
    timer.update((t: Timer) => ({...t, timer: setInterval(updateClock, 1000)}));
    timerStatus = TimerStatus.Started;
  }

  function updateClock() {
    timer.update((t: Timer)  => {
      if (t.timeLeft <= 0) {
        timerStatus = TimerStatus.Cancelled;
        return {...t, timeLeft: 0};
      } else {
        const remainingMs = t.timeLeft - 1000;
        const seconds = Math.floor((remainingMs / 1000) % 60);
        return {
          ...t,
          timeLeft: remainingMs,
          minutesLeft:  Math.floor((remainingMs / 60 / 1000) % 60),
          secondsLeft: seconds.toString().length > 1 ? seconds.toString() : `0${seconds}`,
        }
      }
    });
  }
</script>

<div
  class="text-gray-300 px-3 py-2 rounded-md text-sm hover:bg-gray-700 hover:text-white"
>
    <button class="font-medium " type="button" on:click={toggleTimer}
      >
      {#if timerStatus == TimerStatus.Cancelled}
        Start <span class="font-bold">{minutes}</span> Minute Timer
      {:else if timerStatus == TimerStatus.Paused}
        Resume Timer
      {:else}
        Pause Timer
      {/if}
      </button>
 </div>
