/**
 *
 * @param arg
 * @returns
 */
const constant =
	<T>(arg: T) =>
	() =>
		arg;
export default constant;
