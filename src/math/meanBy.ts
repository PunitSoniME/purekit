import predicateType from '../util/predicateType';
import sumBy from './sumBy';

const meanBy = <T>(collection: T[], iteratee: predicateType<T>): number =>
	sumBy(collection as any[], iteratee) / collection.length;

export default meanBy;
