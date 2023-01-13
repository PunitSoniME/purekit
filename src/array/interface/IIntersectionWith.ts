export default interface IIntersectionWith {
	<T>(array1: T[], array2: T[], comparator: Function): T[];
	<T>(array1: T[], array2: T[], array3: T[], comparator: Function): T[];
	<T>(
		array1: T[],
		array2: T[],
		array3: T[],
		array4: T[],
		comparator: Function
	): T[];
	<T>(
		array1: T[],
		array2: T[],
		array3: T[],
		array4: T[],
		array5: T[],
		comparator: Function
	): T[];
	<T>(
		array1: T[],
		array2: T[],
		array3: T[],
		array4: T[],
		array5: T[],
		array6: T[],
		...restArray: any
	): T[];
}
