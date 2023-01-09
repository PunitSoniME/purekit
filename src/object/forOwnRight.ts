import reverseCollection from '../helpers/reverseCollection';

/**
 *
 * @param object
 * @param iteratee
 * @returns
 */
const forOwnRight = <T>(object: T, iteratee: any): T => {
	const reverseData = reverseCollection(object);

	return (reverseData as any).forEach((value: any, key: any, index: number) => {
		iteratee(value, key, reverseData, index);
	});
};
export default forOwnRight;
