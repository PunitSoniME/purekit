import predicateType from '../helpers/predicateType';
import prepareObject, { prepareObjectTypes } from '../helpers/prepareObject';

const keyBy = <T>(collection: T[], predicate: predicateType<T>): Object => {
	const { result } = prepareObject({
		collection: collection,
		predicate: predicate,
		operation: prepareObjectTypes.replace,
	});
	return result;
};

export default keyBy;
