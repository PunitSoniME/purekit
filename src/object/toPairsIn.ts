import assignIn from './assignIn';

/**
 *
 * @param object
 * @returns
 */
const toPairsIn = (object: object): Array<[string, any]> => {
	const newObject = assignIn({}, object);
	return Object.entries(newObject);
};
export default toPairsIn;
