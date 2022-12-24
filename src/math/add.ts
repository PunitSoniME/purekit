const add = (...numbers: number[]): number =>
	numbers.reduce((oldValue, nextValue) => oldValue + nextValue, 0);

export default add;
