/**
 * Invokes a function only after a certain amount of time has passed since the last time it was called.
 *
 * @since 1.0.0
 *
 * @param {Function} fn - The function to debounce.
 * @param {number} timer - The number of milliseconds to wait before invoking the function.
 * @param {...any} args - Additional arguments to pass to the function.
 * @returns {number} - A timer ID that can be used to cancel the debounce with `clearTimeout`.
 *
 * @example
 * const searchInput = document.getElementById('search-input');
 * const searchResults = document.getElementById('search-results');
 *
 * const fetchResults = async (query) => {
 *   const results = await searchAPI(query);
 *   searchResults.innerHTML = results;
 * };
 *
 * const debounceFetchResults = debounce(fetchResults, 500);
 * searchInput.addEventListener('input', (event) => {
 *   debounceFetchResults(event.target.value);
 * });
 */
const debounce = (fn: Function, timer: number, ...args: any) =>
	setTimeout(() => fn(...args), timer);
export default debounce;
