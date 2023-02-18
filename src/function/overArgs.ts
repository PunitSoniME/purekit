/**
 *
 * @param fn
 * @param transforms
 * @returns
 */
const overArgs =
	(fn: Function, transforms: any) =>
	(...args: any) => {
		const mappedArgs = args.map((arg: any, i: number) =>
			transforms[i] ? transforms[i](arg) : arg
		);
		return fn(...mappedArgs);
	};

export default overArgs;
