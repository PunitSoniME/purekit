const concat = <T>(collection: T[], ...restCollection: any[]) => {
	let newCollection: T[] = [];
	newCollection = newCollection.concat(collection);

	restCollection.forEach((c) => {
		newCollection = newCollection.concat(c);
	});

	return [...newCollection];
};
export default concat;
