/**
 * Performs a deep comparison between two values to determine if they are equivalent.
 * @param value The value to check
 * @param other The value to compare
 * @returns true if both arguments are true
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
		if (!Object.hasOwn(other, key)) return false;
		/* Using the compareAnything function recursively (calling itself) and passing the values of each property into it to check if they are equal. */
		if (isEqual(value[key], other[key]) === false) return false;
	}

	/* if no case matches, returning true */
	return true;
};
export default isEqual;
