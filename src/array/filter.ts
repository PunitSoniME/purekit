const filter = <T>(collection: T[], callback: Function): T[] => {
	return collection.filter(d => {
		return callback(d);
	});
};

export default filter;
