/**
 * Converts a string to snake case.
 *
 * @since 1.0.0
 * 
 * @param {string} [str=''] - The string to convert.
 * 
 * @returns {string} The snake case version of the input string.
 *
 * @example
 * snakeCase('some text'); // 'some_text'
 * snakeCase('some-mixed_string With spaces_underscores-and-hyphens'); // 'some_mixed_string_with_spaces_underscores_and_hyphens'
 * snakeCase('AllThe-small Things'); // 'all_the_small_things'
 *
 */
const snakeCase = (str: string = ''): string =>
	//	@ts-ignore	
	str
		.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
		.map(s => s.toLowerCase())
		.join('_');
export default snakeCase;
