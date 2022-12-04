const dropRight = <T>(array: T[], length?: number) => {
	return length === undefined
		? array.slice(0, -1)
		: length === 0
		? array
		: array.slice(0, length * -1);
};

export default dropRight;
