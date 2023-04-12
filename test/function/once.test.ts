import { once } from '../../src/function';

describe('Function', () => {
	describe('once', () => {
		it('once(func)', () => {
			// Create a spy function
			const spyCallback = jest.spyOn(console, 'log');

			// Call the `callOnce` function with the spy function
			//	@ts-ignore
			const myFunc = once(spyCallback);

			// Call the returned function twice
			myFunc('Testing function > once method - First call');
			myFunc('Testing function > once method - Second call');

			// Check that the spy function was only called once
			expect(spyCallback).toHaveBeenCalledTimes(1);

			// Restore the original console.log function
			spyCallback.mockRestore();
		});
	});
});
