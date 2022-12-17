import createPredicate from '../util/createPredicate';
import predicateType from '../util/predicateType';

const prepareObjectTypes = {
	push: 'push',
	count: 'count',
};

const prepareObject = <T>(
	collection: T[],
	predicate: predicateType<T>,
	operation: string = prepareObjectTypes.push
): Object => {
	const fn = createPredicate(predicate);

	return collection.reduce((group: any, item: T) => {
		const converted = (fn as any)(item);
		if (converted) {
			//	@ts-ignore
			const key = item[predicate] ?? converted;

			switch (operation) {
				case prepareObjectTypes.push:
					group[key] = group.hasOwnProperty(key) ? group[key] : [];
					group[key].push(item);
					break;

				case prepareObjectTypes.count:
					group[key] = group.hasOwnProperty(key) ? group[key] : 0;
					group[key] = ++group[key];
					break;
			}
		}
		return group;
	}, {});
};

export default prepareObject;
export { prepareObjectTypes };
