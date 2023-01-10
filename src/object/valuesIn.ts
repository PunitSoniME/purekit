import assignIn from './assignIn';

/**
 *
 * @param object
 * @returns
 */
const valuesIn = (object: Object): any[] => {
	const newObject = assignIn({}, object);
	return Object.values(newObject);
};
export default valuesIn;
