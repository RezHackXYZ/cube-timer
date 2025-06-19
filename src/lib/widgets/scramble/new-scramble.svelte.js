import { Scramble, ScrambleState } from "$lib/store.svelte.js";
import scramby from "scramby";

export function update_with_new_scramble() {
	const temp_scramble = scramby().getRandomScramble();

	Scramble.v = temp_scramble.scrambleString;
	ScrambleState.v = temp_scramble.state;
}
