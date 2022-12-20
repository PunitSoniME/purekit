import predicateType from '../util/predicateType';
import prepareObject, { prepareObjectTypes } from '../util/prepareObject';

const keyBy = <T>(collection: T[], predicate: predicateType<T>): Object => {
	const { result } = prepareObject(
		collection,
		predicate,
		prepareObjectTypes.replace
	);
	return result;
};

export default keyBy;
