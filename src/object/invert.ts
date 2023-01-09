const invert = (object: Object): Object =>
	Object.entries(object as Object).reduce(
		(acc, [key, value]) => ({
			...acc,
			[value]: key,
		}),
		{}
	);

export default invert;
