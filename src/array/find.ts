const find = <T>(array: T[], callback: Function): any =>
	array.find(d => callback(d));

export default find;
