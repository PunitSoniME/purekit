/**
 *
 * @param object
 * @param sources
 * @param customizer
 * @returns
 */
const assignInWith = <T>(object: T, ...args: any): T => {
	const lastElement = args[args.length - 1];

	if (lastElement instanceof Function && typeof lastElement === 'function') {
		const customizer = args.pop() as any;

		const length = args.length;

		if (length < 1 || object == null) return object;
		for (let i = 0; i < length; i++) {
			const source = args[i];

			for (const key in source) {
				(object as any)[key] = (customizer as any)(
					(object as any)[key],
					source[key],
					key,
					object,
					source
				);
			}
		}
	}

	return object;
};

export default assignInWith;
