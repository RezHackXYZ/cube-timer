import { minutes, seconds, milliseconds, updateTimeInterval } from "$lib/store.svelte.js";
import { update_with_new_scramble } from "$lib/widgets/scramble/new-scramble.svelte.js";

export function start_or_stop_time() {
	if (updateTimeInterval.v) {
		clearInterval(updateTimeInterval.v);
		updateTimeInterval.v = null;

		update_with_new_scramble();
	} else {
		minutes.v = 0;
		seconds.v = 0;
		milliseconds.v = 0;

		updateTimeInterval.v = setInterval(() => {
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
