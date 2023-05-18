/**
 * Calculates the byte size of a string.
 *
 * @since 1.0.3
 *
 * @param {string} str - The input string.
 *
 * @returns {number} - The size of the string in bytes.
 *
 * @example
 * byteSize('😀');
 * // => 4
 *
 * byteSize('Hello World');
 * // => 11
 *
 * byteSize("Hello, world!");
 * // => 13
 */
//  Blob is available in node > 18 version only.
//  Including `Blob` from 'buffer' is increasing the build size
//  Commenting for now, Will include in future
import { Blob } from 'buffer';

const byteSize = (str: string): number => new Blob([str]).size;
export default byteSize;
