import createPredicate from '../util/createPredicate';
import predicateType from '../util/predicateType';

const groupBy = <T>(collection: T[], predicate: predicateType<T>): Object => {
	const fn = createPredicate(predicate);

	return collection.reduce((group: any, item: T) => {
		if ((fn as any)(item)) {
			// item[predicate === undefined ? (fn as any)(item) : predicate];
			//	@ts-ignore
			const key = item[predicate] ?? (fn as any)(item);

			group[key] = group.hasOwnProperty(key) ? group[key] : [];
			group[key].push(item);
		}
		return group;
	}, {});
};

export default groupBy;
