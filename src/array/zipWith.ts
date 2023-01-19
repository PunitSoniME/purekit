/**
 *
 * @param arrays
 * @param args
 */
const zipWith = (arrays: any[], ...args: any[]): any[] => {
	const lastElement = args[args.length - 1];

	if (lastElement instanceof Function && typeof lastElement === 'function') {
		const fn = args.pop() as any;
		return arrays.map((value, idx) =>
			fn(value, ...args.map((arr: any) => arr[idx]))
		);
	}

	//	Below is zip method
	return arrays.map((value, idx) => [value, ...args.map(arr => arr[idx])]);
};

export default zipWith;
