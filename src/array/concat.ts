const concat = <T>(collection: T[], ...restCollection: T[]) =>
	collection.concat([...restCollection]);
export default concat;
