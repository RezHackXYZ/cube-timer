import scramby from "scramby";

export let scramble = $state({ v: scramby().getRandomScramble().scrambleString });

export function new_scramble(type) {
	scramble.v = scramby(type).getRandomScramble().scrambleString;
}
