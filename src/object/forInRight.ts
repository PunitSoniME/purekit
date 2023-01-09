import reverseCollection from '../helpers/reverseCollection';
import assignIn from './assignIn';

/**
 *
 * @param object
 * @param iteratee
 * @returns
 */
const forInRight = <T>(object: T, iteratee: any): T => {
	const collection = assignIn({}, object);
	const reverseData = reverseCollection(collection);

	return (reverseData as any).forEach((value: any, key: any, index: number) => {
		iteratee(value, key, reverseData, index);
	});
};
export default forInRight;
