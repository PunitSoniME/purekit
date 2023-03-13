/**
 * Converts a string path to an array of path segments.
 *
 * @since 1.0.0
 *
 * @param {any} path - The string path to convert.
 *
 * @returns {Array} - An array of path segments.
 *
 * @example
 * const result = toPath('a.b[0].c'); // ['a', 'b', '0', 'c']
 */
const toPath = (path: any): any[] => path.match(/([^[.\]])+/g);
export default toPath;
