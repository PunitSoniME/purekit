//	@ts-nocheck
/**
 *
 * @param fn
 * @param transforms
 * @returns
 */
const overArgs =
	(fn: Function, transforms: any) =>
	(...args) => {
		const mappedArgs = args.map((arg, i) =>
			transforms[i] ? transforms[i](arg) : arg
		);
		return fn(...mappedArgs);
	};

export default overArgs;
