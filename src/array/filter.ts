const filter = <T>(array: T[], callback: Function): T[] => {
	return array.filter(d => {
		return callback(d);
	});
};

export default filter;
