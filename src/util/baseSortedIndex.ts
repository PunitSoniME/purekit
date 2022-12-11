//  This method uses binary search algorithm to get possible index
const baseSortedIndex = <T>(collection: T[], element: T): number => {
	let start = 0;
	let end = collection.length - 1;

	while (start <= end) {
		let mid = Math.floor((start + end) / 2);
		if (collection[mid] === element) return mid;
		else if (collection[mid] < element) start = mid + 1;
		else end = mid - 1;
	}
	return end + 1;
};

export default baseSortedIndex;
