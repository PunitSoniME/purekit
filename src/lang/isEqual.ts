/**
 * Determines whether the two given values are equal or not.
 *
 * @since 1.0.0
 *
 * @param {*} value - The first value to compare.
 * @param {*} other - The second value to compare.
 * @returns {boolean} - `true` if the values are equal, `false` otherwise.
 *
 * @example
 * isEqual(1, 1); // returns true
 * isEqual('hello', 'hello'); // returns true
 * isEqual({ a: 1 }, { a: 1 }); // returns true
 * isEqual([1, 2, 3], [1, 2, 3]); // returns true
 * isEqual(new Set([1, 2, 3]), new Set([1, 2, 3])); // returns true
 * isEqual(new Map([['a', 1]]), new Map([['a', 1]])); // returns true
 * isEqual(null, undefined); // returns false
 * isEqual({ a: 1 }, { a: 2 }); // returns false
 * isEqual([1, 2, 3], [1, 2]); // returns false
 * isEqual(new Set([1, 2, 3]), new Set([1, 2])); // returns false
 * isEqual(new Map([['a', 1]]), new Map([['b', 1]])); // returns false
 */
const isEqual = (value: any, other: any): boolean => {
	/* Checking if any arguments are null */
	if (value === null || other === null) return false;

	/* Checking if the types and values of the two arguments are the same. */
	if (value === other) return true;

	/* Checking if any argument is none object */
	if (typeof value !== 'object' || typeof other !== 'object') return false;

	/* Using Object.getOwnPropertyNames() method to return the list of the objects' properties */
	let value_keys = Object.getOwnPropertyNames(value);

	let other_keys = Object.getOwnPropertyNames(other);

	/* Checking if the objects' length are same*/
	if (value_keys.length !== other_keys.length) return false;

	/* Iterating through all the properties of the value object with the for of method*/
	for (let key of value_keys) {
		/* Making sure that every property in the value object also exists in other object. */
		if (!other.hasOwnProperty(key)) return false;
		/* Using the compareAnything function recursively (calling itself) and passing the values of each property into it to check if they are equal. */
		if (isEqual(value[key], other[key]) === false) return false;
	}

	/* if no case matches, returning true */
	return true;
};
export default isEqual;
