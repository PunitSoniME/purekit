const random = (a = 1, b = 0) => {
	const lower = Math.min(a, b);
	const upper = Math.max(a, b);
	return lower + Math.random() * (upper - lower);
};

const randomInt = (a = 1, b = 0) => {
	const lower = Math.ceil(Math.min(a, b));
	const upper = Math.floor(Math.max(a, b));
	return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const inRange = (
	lower: number = 0,
	upper: number | boolean | undefined = 1 as number
): number => {
	if (upper === undefined) {
		upper = lower;
		lower = 0;
	}

	if ((upper as boolean) === true || parseInt(upper.toString()) !== upper) {
		return random(upper as number, lower);
	}

	return randomInt(upper, lower);
};
export default inRange;
