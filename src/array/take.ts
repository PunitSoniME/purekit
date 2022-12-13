const take = <T>(collection: T[], length: number = 1): T[] =>
	collection.slice(0, length);
export default take;
