import predicateType from '../helpers/predicateType';
import prepareObject, { prepareObjectTypes } from '../helpers/prepareObject';

const groupBy = <T>(collection: T[], predicate: predicateType<T>): Object => {
	const { result } = prepareObject({
		collection: collection,
		predicate: predicate,
		operation: prepareObjectTypes.push,
	});
	return result;
};

export default groupBy;
