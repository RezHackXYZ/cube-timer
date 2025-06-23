import { writable } from "svelte/store";

export let minutes = $state({ v: 0 });
export let seconds = $state({ v: 0 });
export let milliseconds = $state({ v: 0 });

export let updateTimeInterval = $state({ v: null });

export let CubeType = $state({ v: "333" });

export let Scramble = $state({ v: null });
export let ScrambleState = $state({ v: null });

export const ListOfSolves = writable([]);
