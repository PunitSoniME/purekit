/**
 * Checks if value is a safe integer. An integer is safe if it's an IEEE-754 double precision number which isn't the result of a rounded unsafe integer.
 * @param value The value to check.
 * @returns Returns true if value is a safe integer, else false.
 */
const isSafeInteger = (value: any): boolean => Number.isSafeInteger(value);
export default isSafeInteger;
