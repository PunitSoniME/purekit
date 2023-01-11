/**
 *
 * @param numbers
 * @returns
 */
const sum = (numbers: number[]): number =>
	numbers.reduce((acc, num) => {
		acc += num;
		return acc;
	}, 0);

export default sum;
