const add = (...numbers: number[]): number =>
	numbers.reduce((oldValue, nextValue) => {
		return oldValue + nextValue;
	}, 0);

export default add;
