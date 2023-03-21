/**
 * Generates a unique ID.
 *
 * @since 1.0.0
 *
 * @param {number} counter - A counter used to generate the ID.
 * @param {string} [str = ''] - A string to prepend to the generated ID.
 *
 * @returns {string} - A unique ID string.
 *
 * @example
 * const id1 = uniqueId(); // '1'
 * const id2 = uniqueId(); // '2'
 * const id3 = uniqueId(100, 'id_'); // 'id_101'
 *
 */ const uniqueId = (
	(counter: number) =>
	(str = '') =>
		`${str}${++counter}`
)(0);
export default uniqueId;
