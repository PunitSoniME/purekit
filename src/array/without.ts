const without = <T>(collection: T[], ...exception: T[]): T[] =>
	collection.filter((f) => !exception.includes(f));
export default without;
