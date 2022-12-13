const takeRight = <T>(collection: T[], length: number = 1): T[] =>
	collection.slice(
		length === 0 ? collection.length : length * -1,
		collection.length
	);
export default takeRight;
