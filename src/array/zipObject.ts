const zipObject = <T>(keys: string[], values: T[]): Object =>
	keys.reduce((acc: any, key, idx) => {
		acc[key] = values[idx];
		return acc;
	}, {});
export default zipObject;
