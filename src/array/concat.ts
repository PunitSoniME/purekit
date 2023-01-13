// interface Concat {
// 	<T>(array: T[], ...restArray: T[]): T[];
// 	<T>(array: T[], collection2: T | T[], ...restArray: T[]): T[];
// 	<T>(array: T[], collection2: T | T[], collection3: T | T[], ...restArray: T[]): T[];
// }

/**
 *
 * @param array
 * @param restArray
 * @returns
 */
const concat = <T>(array: T[], ...restArray: any[]): T[] => {
	let newArray: T[] = [];
	newArray = newArray.concat(array);

	restArray.forEach(c => {
		newArray = newArray.concat(c);
	});

	return [...newArray];
};
export default concat;
