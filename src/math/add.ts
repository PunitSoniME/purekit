const add = (
	augend: number,
	addend: number,
	...restNumbers: number[]
): number => {
	const numbers = [augend, addend, ...restNumbers];
	return numbers.reduce((oldValue, nextValue) => oldValue + nextValue, 0);
};
export default add;
