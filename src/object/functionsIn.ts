import assignIn from './assignIn';

/**
 * Returns an array of all the function names in the given object, including inherited ones.
 *
 * @param {Object} object - The object to search for functions.
 * @returns {Array} An array of all the function names in the object, including inherited ones.
 * @since 1.0.0
 *
 * @example
 *
 * class Animal {
 *   constructor(name) {
 *     this.name = name;
 *   }
 *
 *   speak() {
 *     console.log(`${this.name} makes a noise.`);
 *   }
 * }
 *
 * class Dog extends Animal {
 *   speak() {
 *     console.log(`${this.name} barks.`);
 *   }
 * }
 *
 * const d = new Dog('Mitzie');
 *
 * const functionNames = functionsIn(d);
 * // functionNames = ['speak']
 */

const functionsIn = (object: Object): any[] => {
	const collection = assignIn({}, object);
	return (
		Object.keys(collection).filter(
			(key: any) => typeof (collection as any)[key] === 'function'
		) ?? []
	);
};
export default functionsIn;
