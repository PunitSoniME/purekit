/**
 * Calculates the day of the year for a given date.
 *
 * @since 1.0.4
 *
 * @param {Date} date - The input date.
 *
 * @returns {number} - The day of the year.
 *
 * @example
 * dayOfYear(new Date());
 * // => Will return the current day number of year, for example 142
 */
const dayOfYear = (date: Date): number => {
	/**
	 * Calculates the number of milliseconds between two dates.
	 * @param {Date} date1 - The first date.
	 * @param {Date} date2 - The second date.
	 * @returns {number} - The number of milliseconds between the two dates.
	 */
	const calculateMilliseconds = (date1: Date, date2: Date): number => {
		return date1.getTime() - date2.getTime();
	};

	const yearStart = new Date(date.getFullYear(), 0, 0);
	const milliseconds = calculateMilliseconds(date, yearStart);
	const millisecondsPerDay = 1000 * 60 * 60 * 24;

	return Math.floor(milliseconds / millisecondsPerDay);
};
export default dayOfYear;
