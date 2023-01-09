import assignIn from './assignIn';

/**
 *
 * @param object
 * @returns
 */
const functionsIn = (object: Object): any[] => {
	const collection = assignIn({}, object);
	return (
		Object.keys(collection).filter(
			(key: any) => typeof (collection as any)[key] === 'function'
		) ?? []
	);
};
export default functionsIn;
