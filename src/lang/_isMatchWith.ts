//  @ts-nocheck
import some from '../collection/some';

//	TODO: toFinite

/**
 * Performs a partial deep comparison between object and source to determine if object contains equivalent property values.
 * @param object The object to inspect.
 * @param source The object of property values to match.
 * @returns Returns true if object is a match, else false.
 */
const isMatchWith = (object: any, source: any, customizer: any): boolean =>
	some(object, source);

export default isMatchWith;
