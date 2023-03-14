/**
 * Capitalizes the first letter of a string.
 *
 * @since 1.0.0
 *
 * @param {string} str - The string to capitalize.
 *
 * @returns {string} - The capitalized string.
 *
 * @example
 * const str1 = 'foo';
 * const str2 = 'BAR';
 * const str3 = 'hElLo WoRlD';
 *
 * const result1 = capitalize(str1); // 'Foo'
 * const result2 = capitalize(str2); // 'Bar'
 * const result3 = capitalize(str3); // 'Hello world'
 */
const capitalize = (str: string): string =>
	str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
export default capitalize;
