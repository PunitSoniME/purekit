type Customizer<T> = (value: T) => T | undefined;

/**
 * Creates a deep copy of the input value and applies a customizer function to each property.
 * If the input value is an HTML DOM element, it is cloned using the `cloneNode` method and
 * passed to the customizer function.
 *
 * @param value - The input value to clone.
 * @param customizer - A function that takes a value and returns a new value, or `undefined` to use
 * the default cloning behavior.
 * @returns A deep copy of the input value with the customizer function applied to each property.
 */

function cloneWith<T>(value: T, customizer: Customizer<T>): T {
	if (typeof customizer !== 'function') {
		return value;
	}

	if (value instanceof HTMLElement) {
		return (customizer(value.cloneNode(true) as any) ||
			value.cloneNode(true)) as any;
	}

	const clonedValue = Array.isArray(value) ? [] : { ...value };
	for (const key in value) {
		if (Object.prototype.hasOwnProperty.call(value, key)) {
			//	@ts-ignore
			clonedValue[key] = customizer(value[key]);
			//	@ts-ignore
			if (clonedValue[key] === undefined) {
				//	@ts-ignore
				clonedValue[key] = cloneWith(value[key], customizer);
			}
		}
	}
	return clonedValue as any;
}

export default cloneWith;
