const initial = <T>(array: T[]): T[] => {
	const lastIndex = array.length - 1;
	return array.filter((_, index) => index !== lastIndex);
};

export default initial;
