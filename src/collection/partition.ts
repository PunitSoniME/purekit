import predicateType from '../util/predicateType';
import prepareObject, { prepareObjectTypes } from '../util/prepareObject';

const partition = <T>(collection: T[], predicate: predicateType<T>): any[] => {
	const { result, conditionFailedRecords } = prepareObject({
		collection: collection,
		predicate: predicate,
		operation: prepareObjectTypes.push,
		includeConditionFailRecord: true,
	});

	let dataToReturn = Object.values(result).reduce(
		(accumulator: any, currentValue: any) => {
			return [...accumulator, currentValue];
		},
		[]
	) as any[];

	return Object.values(conditionFailedRecords).reduce(
		(accumulator: any, currentValue: any) => {
			return [...accumulator, currentValue];
		},
		dataToReturn
	) as any[];
};

export default partition;
