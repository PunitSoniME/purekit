/**
 *
 * @param func
 * @param order
 * @returns
 */
const rearg =
	(func: Function, order: any) =>
	(...args: any) => {
		const reargs = order.map((idx: any) => args[idx]);
		return func(...reargs);
	};

export default rearg;
