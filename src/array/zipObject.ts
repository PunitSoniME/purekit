const zipObject = <T>(keys: string[], values: T[]): Object => {
	let obj: any = {};

	keys.forEach((key, index) => {
		obj[key] = values[index];
	});

	return obj;
};
export default zipObject;
