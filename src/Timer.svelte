<script lang="ts">
  export let minutes: number;
  let timeLeft: number = 0;
  let minutesLeft: number;
  let secondsLeft: string;
  let timer;

  function startTimer() {
    timeLeft = minutes * 60 * 1000 + 1000; // Extra 1000 seconds because we begin by decrementing
    updateClock();
    timer = setInterval(updateClock, 1000);
  }

  function updateClock() {
    timeLeft = timeLeft - 1000;
    minutesLeft = Math.floor((timeLeft / 60 / 1000) % 60);
    let seconds = Math.floor((timeLeft / 1000) % 60);
    secondsLeft =
      seconds.toString().length > 1 ? seconds.toString() : `0${seconds}`;

    if (timeLeft <= 0) {
      let audio = new Audio("Sirenenalarm.ogg");
      audio.play();

      setTimeout(() => {
        cancelTimer();
      });
      return;
    }
  }

  function cancelTimer() {
    clearInterval(timer);
    timer = undefined;
  }
</script>

<div
  class="text-gray-300 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white"
>
  {#if !timer}
    <button type="button" on:click={startTimer}
      >Start <span class="font-bold">{minutes}</span> Minute Timer</button
    >
  {:else}
    <button on:click={cancelTimer}>{minutesLeft}:{secondsLeft}</button>
  {/if}
</div>
