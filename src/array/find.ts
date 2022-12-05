const find = <T>(collection: T[], callback: Function): any =>
	collection.find(d => callback(d));

export default find;
