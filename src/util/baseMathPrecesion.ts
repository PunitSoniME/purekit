//  @ts-nocheck
const baseMathPrecesion = (
	number: number,
	precision: number,
	mathFunctionName: string
) => {
	var coefficient = Math.pow(10, precision);
	return Math[mathFunctionName](number * coefficient) / coefficient;
};

export default baseMathPrecesion;
