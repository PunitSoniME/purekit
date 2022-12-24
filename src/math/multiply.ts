const multiply = (...numbers: number[]): number => {
	return numbers.reduce((oldValue, newValue) => oldValue * newValue, 1);
};

export default multiply;
