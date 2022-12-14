//  @ts-nocheck
import createPredicate from '../util/createPredicate';
import predicateType from '../util/predicateType';

const groupBy = <T>(
	collection: T[],
	predicate: string | predicateType<T>
): Object => {
	const fn = createPredicate(predicate);

	switch (typeof collection[0]) {
		case 'object':

		// return collection.reduce((group, item, index) => {

		//     group[predicate] = group[predicate] ?? [];
		//     group[predicate].push(item);
		//     return group;
		// }, {});
	}

	return {};
};

export default groupBy;
