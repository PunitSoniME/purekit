//	@ts-nocheck
const sort = <T>(data: T, orderBy: any[]) => {
	return (data as T[]).sort((a: any, b: any) => {
		for (let i = 0, size = orderBy.length; i < size; i++) {
			const key = Object.keys(orderBy[i])[0],
				o = orderBy[i][key],
				valueA = a[key],
				valueB = b[key];

			if (!(valueA || valueB)) {
				throw Error(
					"the objects from the data passed does not have the key '" +
						key +
						"' passed on sort!"
				);
			}
			if (+valueA === +valueA) {
				return o.toLowerCase() === 'desc' ? valueB - valueA : valueA - valueB;
			} else {
				if (valueA.localeCompare(valueB) > 0) {
					return o.toLowerCase() === 'desc' ? -1 : 1;
				} else if (valueA.localeCompare(valueB) < 0) {
					return o.toLowerCase() === 'desc' ? 1 : -1;
				}
			}
		}
	});
};

/**
 *
 * @param collection
 * @param iteratee
 * @param orders
 * @returns
 */
const orderBy = <T>(
	collection: T,
	iteratee: string | string[],
	orders: string | string[] = 'asc'
): T => {
	const prepareSortConfig = Array.isArray(iteratee)
		? iteratee.map((m, index) => {
				return { [m]: orders[index] };
		  })
		: [{ [iteratee]: Array.isArray(orders) ? orders[0] : orders }];

	//	@ts-ignore
	return sort(collection, prepareSortConfig);
};

export default orderBy;
