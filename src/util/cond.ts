/**
 *
 * @param pairs
 * @returns
 */
const cond =
	(pairs: any[]) =>
	(...item: any[]) => {
		for (const [predicate, fn] of pairs) {
			if (predicate(...item)) {
				return fn(...item);
			}
		}
	};

export default cond;
