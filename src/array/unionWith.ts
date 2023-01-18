import identity from '../util/identity';

/**
 *
 * @param array One of the array to perform union operation on
 * @param args
 * @returns
 */
const unionWith = <T>(array: T[], ...args: any): T[] => {
	let comparator = args.pop() ?? identity;

	return array
		.concat(...args)
		.filter((x, i, self) => i === self.findIndex(y => comparator(x, y)));
};

export default unionWith;
