const fromPairs = <T>(collection: T[][]): Object =>
	Object.fromEntries(collection);

export default fromPairs;
