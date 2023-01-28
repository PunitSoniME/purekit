const divide = (
	dividend: number | string,
	divisor: number | string
): number | typeof NaN => Number(dividend) / Number(divisor);
export default divide;
