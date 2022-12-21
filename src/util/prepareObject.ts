import createPredicate from '../util/createPredicate';
import predicateType from '../util/predicateType';

const prepareObjectTypes = {
	push: 'push', //	return the array with all the matched elements
	count: 'count', //	return the count if matched item found
	replace: 'replace', //	return the new object by replacing the previous one if match found
};

interface IPrepareObjectFN<T> {
	collection: T[];
	predicate: predicateType<T>;
	operation?: string;
	includeConditionFailRecord?: boolean;
}

const prepareObject = <T>({
	collection,
	predicate,
	operation = prepareObjectTypes.push,
	includeConditionFailRecord = false,
}: IPrepareObjectFN<T>): {
	result: any;
	conditionFailedRecords: any;
} => {
	const fn = createPredicate(predicate);
	const conditionFailedRecords: any = {};

	const result = collection.reduce((group: any, item: T) => {
		const converted = (fn as any)(item);

		// if (converted) {
		//	@ts-ignore
		const key = item[predicate] ?? converted;

		switch (operation) {
			case prepareObjectTypes.push:
				if (converted) {
					group[key] = group.hasOwnProperty(key) ? group[key] : [];
					group[key].push(item);
				} else if (includeConditionFailRecord) {
					conditionFailedRecords[key] = conditionFailedRecords.hasOwnProperty(
						key
					)
						? conditionFailedRecords[key]
						: [];
					conditionFailedRecords[key].push(item);
				}
				break;

			case prepareObjectTypes.count:
				if (converted) {
					group[key] = group.hasOwnProperty(key) ? group[key] : 0;
					group[key] = ++group[key];
				} else if (includeConditionFailRecord) {
					conditionFailedRecords[key] = conditionFailedRecords.hasOwnProperty(
						key
					)
						? conditionFailedRecords[key]
						: 0;
					conditionFailedRecords[key] = ++conditionFailedRecords[key];
				}
				break;

			case prepareObjectTypes.replace:
				if (converted) {
					group[key] = group.hasOwnProperty(key) ? group[key] : {};
					group[key] = { ...item };
				} else if (includeConditionFailRecord) {
					conditionFailedRecords[key] = conditionFailedRecords.hasOwnProperty(
						key
					)
						? conditionFailedRecords[key]
						: {};
					conditionFailedRecords[key] = { ...item };
				}
				break;
		}
		// }
		return group;
	}, {});

	return {
		result: { ...result },
		conditionFailedRecords: { ...conditionFailedRecords },
	};
};

export default prepareObject;
export { prepareObjectTypes };
