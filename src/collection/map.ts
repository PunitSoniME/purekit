import createPredicate from '../util/createPredicate';

/**
 * Creates an array of values by running each element in collection thru iteratee. The iteratee is invoked with three arguments
(value, index|key, collection).
 * @param collection Array | Object
 * @param iteratee 
 * @returns An array
 */
const map = <T>(collection: T, iteratee: any): T => {
	const updatedIteratee: any = createPredicate(iteratee);

	if (Array.isArray(collection)) {
		return (collection as any).map((rest: any) => updatedIteratee(rest));
	}

	if (collection && typeof collection === 'object') {
		return (Object.entries(collection).map as any)(
			([key, value]: any[], index: number) =>
				updatedIteratee(value, key, collection, index)
		);
	}

	return (collection as any).map(iteratee);
};

export default map;
