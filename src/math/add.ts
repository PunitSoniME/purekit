const add = (
	augend: number | string,
	addend: number | string,
	...restNumbers: Array<number | string>
): number => {
	const defaultValue: any =
		typeof augend === 'string' || typeof addend === 'string' ? '' : 0;
	const numbers = [augend, addend, ...restNumbers];
	return numbers.reduce(
		(oldValue, nextValue) => oldValue + nextValue,
		defaultValue
	);
};
export default add;
