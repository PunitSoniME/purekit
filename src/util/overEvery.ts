import identity from './identity';

/**
 *
 * @param predicates
 * @returns
 */
const overEvery =
	(predicates: any[] = [identity]) =>
	(item: any) =>
		predicates.every(check => check(item));
export default overEvery;
