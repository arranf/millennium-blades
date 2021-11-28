<script lang="ts">
  import {timer} from './store';

  let minutesLeft: number;
  let secondsLeft: string;
  let localTimer;
  let audioPlayed: boolean = false;

  function cancelTimer() {
    clearTimeout(localTimer);
    timer.update(t => ( {...t, timer: null}));
  }

  timer.subscribe(t => {
    localTimer = t.timer;
    secondsLeft = t.secondsLeft;
    minutesLeft = t.minutesLeft;
    
    if (t.timeLeft === 0 && !audioPlayed) {
      audioPlayed = true;
      const audio = new Audio("Sirenenalarm-short.ogg");
      audio.play();

      setTimeout(() => {
        cancelTimer();
      }, 5000);
      return;
    }
  });
</script>

{#if localTimer}
    <div class="h-screen max-w-screen bg-black">
        <h2 class="font-medium text-white absolute top-1/2 left-1/2 text-8xl" on:click={cancelTimer}>{minutesLeft}:{secondsLeft}</h2>
    </div>
{/if}
