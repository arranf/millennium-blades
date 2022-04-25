import { get, writable } from "svelte/store";
import type { Writable } from "svelte/store";

export enum TimerStatus {
  Cancelled = "Cancelled",
  Started = "Started",
  Paused = "Paused",
}

export interface Timer {
  secondsLeft: string;
  minutesLeft: number;
  timeLeft?: number;
  timer: any;
  timerStatus: TimerStatus;
  minutesDuration?: number;
}

export const timer: Writable<Timer> = writable({
  secondsLeft: "0",
  minutesLeft: 0,
  timeLeft: undefined,
  timer: null,
  timerStatus: TimerStatus.Cancelled,
  minutesDuration: undefined,
});

// Pause with enter or space
const SPACE_KEYCODE = 32;
const ENTER_KEYCODE = 13;
const TRIGGER_KEYCODES = [SPACE_KEYCODE, ENTER_KEYCODE];
const PAUSE_RESUME_STATUS = [TimerStatus.Started, TimerStatus.Paused];
window.addEventListener("keydown", function (e) {
  const timerStatus = get(timer).timerStatus;
  if (
    TRIGGER_KEYCODES.includes(e.keyCode) &&
    e.target == document.body &&
    PAUSE_RESUME_STATUS.includes(timerStatus)
  ) {
    e.preventDefault();
    pauseOrResumeTimer();
  }
});

export function toggleTimer(minutesToStart: number) {
  let timerStatus = get(timer).timerStatus;
  switch (timerStatus) {
    case TimerStatus.Cancelled:
      startTimer(minutesToStart);
      return;
    case TimerStatus.Paused:
      resumeTimer();
      return;
    case TimerStatus.Started:
      pauseTimer();
      return;
  }
}

export function pauseOrResumeTimer() {
  let timerStatus = get(timer).timerStatus;
  switch (timerStatus) {
    case TimerStatus.Cancelled:
      return;
    case TimerStatus.Paused:
      resumeTimer();
      return;
    case TimerStatus.Started:
      pauseTimer();
      return;
  }
}

function startTimer(minutes: number) {
  const currentTimer = get(timer);
  if (currentTimer.timer) {
    return;
  }

  timer.update((t: Timer) => ({
    ...t,
    timeLeft: Math.round((minutes * 60 * 1000) / 1000) * 1000 + 1000,
    timer: setInterval(updateClock, 1000),
    timerStatus: TimerStatus.Started,
    minutesDuration: minutes,
  })); // Extra 1000 seconds because we begin by decrementing
  updateClock();
}

function pauseTimer() {
  timer.update((t: Timer) => {
    clearTimeout(t.timer);
    return {
      ...t,
      timerStatus: TimerStatus.Paused,
    };
  });
}

function resumeTimer() {
  timer.update((t: Timer) => ({
    ...t,
    timer: setInterval(updateClock, 1000),
    timerStatus: TimerStatus.Started,
  }));
}

function updateClock() {
  timer.update((t: Timer) => {
    if (t.timeLeft == undefined || t.timeLeft <= 0) {
      return { ...t, timeLeft: 0, timerStatus: TimerStatus.Cancelled };
    } else {
      const remainingMs = t.timeLeft - 1000;
      const seconds = Math.floor((remainingMs / 1000) % 60);
      return {
        ...t,
        timeLeft: remainingMs,
        minutesLeft: Math.floor((remainingMs / 60 / 1000) % 60),
        secondsLeft:
          seconds.toString().length > 1 ? seconds.toString() : `0${seconds}`,
      };
    }
  });
}

// TODO: Is this sensible at this scope?
let audioPlayed: boolean = false;

export function cancelTimer() {
  timer.update((t) => {
    clearTimeout(t.timer);
    return { ...t, timer: null, timerStatus: TimerStatus.Cancelled };
  });
  audioPlayed = false;
}

timer.subscribe((t) => {
  if (t.timeLeft !== undefined && t.timeLeft <= 0 && !audioPlayed) {
    audioPlayed = true;
    const audio = new Audio("Sirenenalarm-short.ogg");
    audio.play();

    setTimeout(() => {
      cancelTimer();
    }, 3000);
    return;
  }
});
