const get = (object: any, path: string, defaultValue?: any) => {
	//	One Way
	// return path
	// 	.split(/[\.\[\]\'\"]/)
	// 	.filter(p => p)
	// 	.reduce((o, p) => o ? o[p] : defaultValue, object);

	//	Faster Way
	if (typeof object === 'undefined' || object === null) return;
	let newPath = path.split(/[\.\[\]\"\']{1,2}/);
	for (var i = 0, l = newPath.length; i < l; i++) {
		if (newPath[i] === '') continue;
		object = object[newPath[i]];
		if (typeof object === 'undefined' || object === null) return;
	}

	return object ?? defaultValue;
};

export default get;
