/**
 * Creates a chainable object that wraps the given value.
 *
 * @since 1.0.0
 *
 * @param {*} value - The value to wrap.
 *
 * @returns {Object} - An object with a `fn` method to chain function calls and a `value` method to retrieve the wrapped value.
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
 *
 * => 'pebbles is 1'
 */
const chain2 = (value: any) => {
	return {
		/**
		 * Chains a function call onto the wrapped value and returns a new chainable object with the result.
		 *
		 * @param {Function|string} func - The function or method to call on the wrapped value.
		 * @param {...*} args - Any additional arguments to pass to the function or method.
		 *
		 * @returns {Object} - A new chainable object that wraps the result of the function or method call.
		 */
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
