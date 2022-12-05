const dropRight = <T>(collection: T[], length?: number) => {
	return length === undefined
		? collection.slice(0, -1)
		: length === 0
		? collection
		: collection.slice(0, length * -1);
};

export default dropRight;
