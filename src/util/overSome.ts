import identity from './identity';

/**
 *
 * @param predicates
 * @returns
 */
const overSome =
	(predicates: any[] = [identity]) =>
	(item: any) =>
		predicates.some(check => check(item));
export default overSome;
