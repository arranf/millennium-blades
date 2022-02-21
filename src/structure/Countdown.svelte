<script lang="ts">

  import {cancelTimer, pauseOrResumeTimer, timer, TimerStatus} from '../store';
  import type {Timer} from "../store";

  let minutesLeft: number;
  let secondsLeft: string;
  let timerStatus : TimerStatus;


  timer.subscribe((t: Timer) => {
    timerStatus = t.timerStatus;
    secondsLeft = t.secondsLeft;
    minutesLeft = t.minutesLeft;
  });
</script>

{#if timerStatus === TimerStatus.Started || timerStatus == TimerStatus.Paused}
    <aside class="h-screen max-w-screen bg-black flex justify-center align-center">
        <div class="flex justify-center align-center flex-col">
          <h2 class="font-medium text-white text-8xl">{minutesLeft}:{secondsLeft}</h2>
          <div class="flex flex justify-between pt-4">
            <button on:click={pauseOrResumeTimer} class="text-gray-400">{timerStatus === TimerStatus.Started ? 'Pause' : 'Resume' }</button>
            <button on:click={cancelTimer} class="text-gray-400">Cancel</button>
          </div>
        </div>
      </aside>
{/if}
