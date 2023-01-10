import assignIn from './assignIn';

/**
 *
 * @param object
 * @returns
 */
const keysIn = (object: any): any[] => {
	const collection = assignIn({}, object);
	return Object.keys(collection);
};
export default keysIn;
