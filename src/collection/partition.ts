import predicateType from '../util/predicateType';
import prepareObject, { prepareObjectTypes } from '../util/prepareObject';

const partition = <T>(collection: T[], predicate: predicateType<T>): any[] => {
	const { result, conditionFailedRecords } = prepareObject(
		collection,
		predicate,
		prepareObjectTypes.push,
		true
	);

	let dataToReturn: any[] = [];
	Object.values(result).forEach(m => dataToReturn.push(m));
	Object.values(conditionFailedRecords).forEach(m => dataToReturn.push(m));
	return dataToReturn;
};

export default partition;
