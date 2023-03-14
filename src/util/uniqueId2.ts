/**
 * Generates a cryptographically secure unique ID.
 *
 * @since 1.0.0
 *
 * @returns {string} - A unique ID string.
 *
 * @example
 * const id1 = uniqueId2(); // id1 is a unique ID string
 * const id2 = uniqueId2(); // id2 is a different unique ID string
 */
const uniqueId2 = () =>
	//  @ts-ignore
	([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c: number) =>
		(
			c ^
			(crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
		).toString(16)
	);

export default uniqueId2;
