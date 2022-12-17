const get = (object: any, path: string, defaultValue?: any) => {
	const parts = path.split('.');
	for (let part of parts) {
		if (!object) return defaultValue;
		object = object[part];
	}
	return object ?? defaultValue;
};

export default get;
