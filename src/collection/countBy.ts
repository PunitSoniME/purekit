import predicateType from '../helpers/predicateType';
import prepareObject, { prepareObjectTypes } from '../helpers/prepareObject';

const countBy = <T>(collection: T[], predicate: predicateType<T>): Object => {
	const { result } = prepareObject({
		collection: collection,
		predicate: predicate,
		operation: prepareObjectTypes.count,
	});
	return result;
};

export default countBy;
