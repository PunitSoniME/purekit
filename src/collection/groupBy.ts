import predicateType from '../util/predicateType';
import prepareObject, { prepareObjectTypes } from '../util/prepareObject';

const groupBy = <T>(collection: T[], predicate: predicateType<T>): Object => {
	const { result } = prepareObject(
		collection,
		predicate,
		prepareObjectTypes.push
	);
	return result;
};

export default groupBy;
