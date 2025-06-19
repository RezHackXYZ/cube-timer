import { minutes, seconds, milliseconds, updateTime } from "./time_store.svelte.js";
import { new_scramble } from "./scramble/scramble-logic.svelte";

export function start_or_stop() {
	if (updateTime.v) {
		clearInterval(updateTime.v);
		updateTime.v = null;
		minutes.v = 0;
		seconds.v = 0;
		milliseconds.v = 0;

		new_scramble("333");

	} else {
		updateTime.v = setInterval(async () => {
			milliseconds.v++;
			if (milliseconds.v >= 100) {
				milliseconds.v = 0;
				seconds.v++;
				if (seconds.v >= 60) {
					seconds.v = 0;
					minutes.v++;
				}
			}
		}, 10);
	}
}
