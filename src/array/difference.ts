const difference = <T>(collection1: T[], collection2: T[]): T[] => {
	return collection1.filter(x => !collection2.includes(x));
};

export default difference;
