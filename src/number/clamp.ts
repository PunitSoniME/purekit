const clamp = (number: number, lower: number, upper: number): number =>
	Math.max(lower, Math.min(number, upper));

export default clamp;
