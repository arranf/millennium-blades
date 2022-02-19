import { get, Writable, writable } from "svelte/store";
import { ExpansionName } from "./types/ExpansionName";
import type { Settings } from "./types/Settings";
import { SETTINGS_NAME } from "./constants";
import { MetagameSet } from "./data/cards";
import type { Route } from "./types/Route";

export interface Timer {
  secondsLeft: string;
  minutesLeft: number;
  timeLeft?: number;
  timer: any;
  timerStatus: TimerStatus;
  minutesDuration?: number;
}

export enum TimerStatus {
  Cancelled = "Cancelled",
  Started = "Started",
  Paused = "Paused",
}

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
  let timerStatus = get(timer).timerStatus;
  timerStatus = TimerStatus.Started;
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

export const timer: Writable<Timer> = writable({
  secondsLeft: "0",
  minutesLeft: 0,
  timeLeft: undefined,
  timer: null,
  timerStatus: TimerStatus.Cancelled,
  minutesDuration: undefined,
});

let audioPlayed: boolean = false;

document.onkeypress = function (event) {
  let char = event.keyCode;
  if (char && char === 13) {
    pauseOrResumeTimer();
  }
};

export function cancelTimer() {
  timer.update((t) => {
    clearTimeout(t.timer);
    return { ...t, timer: null };
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


export const route: Writable<Route> = writable("home");

export const settings: Writable<Settings> = writable(getSettings());

function getSettings(): Settings {
  const localStorageSettings = localStorage.getItem(SETTINGS_NAME);
  const settings = localStorageSettings ? JSON.parse(localStorageSettings) : {};
  return {
    collapsed: {
      expansionSelect: settings?.collapsed?.expansionSelect ?? false,
    },
    activeExpansions: settings?.activeExpansions ?? [ExpansionName.BASE_GAME],
    selectedSets: {
      bronzePromos: [],
      silverPromos: [],
      goldPromos: [],
      expansionPacks: [],
      premiumPacks: [],
      masterPacks: [],
      bronzePromoPrize: [],
      silverPromoPrize: [],
      metagameSets: [MetagameSet.ELEMENT, MetagameSet.TYPE],
      ...settings?.selectedSets,
    },
  };
}

settings.subscribe((settings) => {
  persist(settings);
});

export function persist(settings: Settings): void {
  localStorage.setItem(SETTINGS_NAME, JSON.stringify({ ...settings }));
}
