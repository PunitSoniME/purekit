import get from '../object/get';

/**
 *
 * @param path
 * @returns
 */
const property = (path: string | any[]) => (obj: any) => get(obj, path);
export default property;
