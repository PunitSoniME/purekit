const get = (object: any, path: string | any[] | any, defaultValue?: any) => {
	//	One Way
	// return path
	// 	.split(/[\.\[\]\'\"]/)
	// 	.filter(p => p)
	// 	.reduce((o, p) => o ? o[p] : defaultValue, object);

	// If path is not defined or it has false value
	if (!path) return undefined;
	// Check if path is string or array. Regex : ensure that we do not have '.' and brackets.
	// Regex explained: https://regexr.com/58j0k
	const pathArray = Array.isArray(path) ? path : path.match(/([^[.\]])+/g);

	if (pathArray === null) return defaultValue;
	// Find value
	const result = (pathArray as any[]).reduce(
		(prevObj, key) => prevObj && prevObj[key],
		object
	);
	// If found value is undefined return default value; otherwise return the value
	return result === undefined ? defaultValue : result;

	//	Faster Way
	// if (typeof object === 'undefined' || object === null) return;
	// let newPath = path.split(/[\.\[\]\"\']{1,2}/);
	// for (var i = 0, l = newPath.length; i < l; i++) {
	// 	if (newPath[i] === '') continue;
	// 	object = object[newPath[i]];
	// 	if (typeof object === 'undefined' || object === null) return;
	// }

	// return object ?? defaultValue;
};

export default get;
