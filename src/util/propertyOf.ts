import get from '../object/get';

/**
 *
 * @param obj
 * @returns
 */
const propertyOf = (obj: any) => (path: string | any[]) => get(obj, path);
export default propertyOf;
