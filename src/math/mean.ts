const mean = (collection: number[]): number => {
	return collection.reduce((acc, num) => acc + num, 0) / collection.length;
};

export default mean;
