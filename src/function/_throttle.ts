/**
 * Creates a throttled function that only invokes `func` at most once per every `wait` milliseconds.
 *
 * @param {Function} func - The function to throttle.
 * @param {number} wait - The number of milliseconds to throttle invocations to.
 * @param {Object} options - The options object.
 * @param {boolean} [options.leading=true] Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true] Specify invoking on the trailing edge of the timeout.
 * @returns {Function} - Returns the new throttled function.
 */
const throttle = <T extends (...args: any[]) => any>(
	func: T,
	wait: number,
	options: { leading?: boolean; trailing?: boolean } = {}
) => {
	let lastCallTime = 0;
	let timeoutId: NodeJS.Timeout;
	let leadingCallExecuted = false;
	let trailingCallExecuted = false;

	const leading = options.leading ?? true;
	const trailing = options.trailing ?? true;

	return (...args: Parameters<T>): any => {
		const now = Date.now();

		if (now - lastCallTime < wait) {
			if (leading && !leadingCallExecuted) {
				leadingCallExecuted = true;
				func(...args);
			}

			clearTimeout(timeoutId);
			timeoutId = setTimeout(() => {
				lastCallTime = now;
				trailingCallExecuted = true;

				if (leadingCallExecuted || trailing) {
					func(...args);
				}

				leadingCallExecuted = false;
				trailingCallExecuted = false;
			}, wait - (now - lastCallTime));
		} else {
			lastCallTime = now;
			leadingCallExecuted = true;
			func(...args);

			if (trailing && !trailingCallExecuted) {
				timeoutId = setTimeout(() => {
					trailingCallExecuted = true;
					func(...args);
					trailingCallExecuted = false;
				}, wait);
			}
		}
	};
};

export default throttle;
