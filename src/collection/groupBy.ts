import predicateType from '../util/predicateType';
import prepareObject, { prepareObjectTypes } from '../util/prepareObject';

const groupBy = <T>(collection: T[], predicate: predicateType<T>): Object => {
	const { result } = prepareObject({
		collection: collection,
		predicate: predicate,
		operation: prepareObjectTypes.push,
	});
	return result;
};

export default groupBy;
