const subtract = (...numbers: number[]): number => {
	return numbers.reduce(
		(oldValue, newValue, index) =>
			index === 0 ? newValue : oldValue - newValue,
		0
	);
};

export default subtract;
