<script lang="ts">
  import {cancelTimer, timer, TimerStatus} from '../store';

  let minutesLeft: number;
  let secondsLeft: string;
  let timerStatus : TimerStatus;


  timer.subscribe(t => {
    timerStatus = t.timerStatus;
    secondsLeft = t.secondsLeft;
    minutesLeft = t.minutesLeft;
  });


</script>

{#if timerStatus === TimerStatus.Started || timerStatus == TimerStatus.Paused}
    <div class="h-screen max-w-screen bg-black">
        <h2 class="font-medium text-white absolute top-1/2 left-1/2 text-8xl" on:click={cancelTimer}>{minutesLeft}:{secondsLeft}</h2>
    </div>
{/if}
