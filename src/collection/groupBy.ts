import predicateType from '../util/predicateType';
import prepareObject, { prepareObjectTypes } from '../util/prepareObject';

const groupBy = <T>(collection: T[], predicate: predicateType<T>): Object => {
	return prepareObject(collection, predicate, prepareObjectTypes.push);
};

export default groupBy;
