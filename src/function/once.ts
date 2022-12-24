const once = <T extends (...args: any[]) => any>(fn: T): T => {
	let result: ReturnType<T>;
	let called = false;
	return function once_wrapped(this: any, ...args: any[]) {
		if (!called) {
			called = true;
			result = fn.apply(this, args);
		}
		return result;
	} as any;
};

export default once;
