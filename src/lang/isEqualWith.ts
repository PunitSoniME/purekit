/**
 * Performs a deep comparison between two values to determine if they are equivalent,
 * using a custom function to compare values.
 *
 * @since 1.0.0
 *
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {Function} customizer The function to customize value comparisons.
 * @returns {boolean} - Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * function compareFunc(objValue, othValue) {
 *   if (Array.isArray(objValue) && Array.isArray(othValue)) {
 *     return objValue.length === othValue.length;
 *   }
 * }
 *
 * const object = { 'a': [{ 'b': 2 }, { 'd': 4 }] };
 * const other = { 'a': [{ 'b': 2 }, { 'd': 4 }] };
 *
 * isEqualWith(object, other, compareFunc);
 * // => true
 *
 * isEqualWith(object, other, (objValue, othValue) => {
 *   if (Array.isArray(objValue) && Array.isArray(othValue)) {
 *     return objValue.length === othValue.length;
 *   }
 * });
 * // => true
 *
 */
const isEqualWith = (value: any, other: any, customizer: Function): boolean => {
	/* Checking if any arguments are null */
	if (value === null || other === null) return false;

	/* Checking if the types and values of the two arguments are the same. */
	if (customizer(value, other)) return true;

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
		if (isEqualWith(value[key], other[key], customizer) === false) return false;
	}

	/* if no case matches, returning true */
	return true;
};
export default isEqualWith;
