import prepareObject, { prepareObjectTypes } from '../helpers/prepareObject';

const reject = <T>(collection: T[], predicate: any): any[] => {
	const { conditionFailedRecords } = prepareObject({
		collection: collection,
		predicate: predicate,
		operation: prepareObjectTypes.push,
		includeConditionFailRecord: true,
	});

	return Object.values(conditionFailedRecords).reduce(
		(accumulator: any, currentValue: any) => {
			return [...accumulator, ...currentValue];
		},
		[]
	) as any[];
};

export default reject;
