import predicateType from '../util/predicateType';
import prepareObject, { prepareObjectTypes } from '../util/prepareObject';

const countBy = <T>(collection: T[], predicate: predicateType<T>): Object => {
	return prepareObject(collection, predicate, prepareObjectTypes.count);
};

export default countBy;
