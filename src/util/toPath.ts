/**
 *
 * @param path
 * @returns
 */
const toPath = (path: any): any[] => path.match(/([^[.\]])+/g);
export default toPath;
