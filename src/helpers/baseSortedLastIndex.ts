//  This method uses binary search algorithm to get possible last index
const baseSortedLastIndex = <T>(
	collection: T[],
	element: T,
	fn?: any
): number => {
	let low = 0,
		high = collection.length - 1,
		res = -1;
	while (low <= high) {
		// Normal Binary Search Logic
		let mid = Math.floor((low + high) / 2);

		if (fn) {
			if ((fn as any)(collection[mid]) > (fn as any)(element)) high = mid - 1;
			else if ((fn as any)(collection[mid]) < (fn as any)(element))
				low = mid + 1;
			else {
				res = mid;
				low = mid + 1;
			}
		} else {
			if (collection[mid] > element) high = mid - 1;
			else if (collection[mid] < element) low = mid + 1;
			else {
				res = mid;
				low = mid + 1;
			}
		}
	}
	return res + 1;
};

export default baseSortedLastIndex;
