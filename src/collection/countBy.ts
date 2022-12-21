import predicateType from '../util/predicateType';
import prepareObject, { prepareObjectTypes } from '../util/prepareObject';

const countBy = <T>(collection: T[], predicate: predicateType<T>): Object => {
	const { result } = prepareObject({
		collection: collection,
		predicate: predicate,
		operation: prepareObjectTypes.count,
	});
	return result;
};

export default countBy;
