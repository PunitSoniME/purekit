/**
 *
 * @param value
 * @returns
 *
 * @example
 *
 * const users = [
 * { 'user': 'barney', 'age': 36 },
 * { 'user': 'fred', 'age': 40 },
 * { 'user': 'pebbles', 'age': 1 }
 * ];
 *
 * const youngest = chain2(users)
 *  .fn(sortBy, 'age')
 *  .fn(map, (function (o: any) {
 *      return o.user + ' is ' + o.age;
 *  }))
 *  .fn(head)
 *  .value();
 */
const chain2 = (value: any) => {
	return {
		fn(func: Function, ...args: any) {
			if (typeof func === 'function') {
				return chain2(func(value, ...args));
			}
			return chain2(value[func](...args));
		},
		value: () => value,
	};
};

export default chain2;
