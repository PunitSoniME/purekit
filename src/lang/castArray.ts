/**
 *
 * @param input
 * @returns
 */
const castArray = <T>(input: T): T | T[] => {
	if (Array.isArray(input)) return input;
	return [input];
};

export default castArray;
