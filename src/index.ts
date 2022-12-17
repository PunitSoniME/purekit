import * as array from './array';
import * as maths from './maths';
import * as collection from './collection';

import {
	chunk,
	compact,
	concat,
	difference,
	differenceBy,
	drop,
	dropRight,
	first,
	fill,
	findIndex,
	findLastIndex,
	flatten,
	flattenDeep,
	flattenDepth,
	fromPairs,
	head,
	indexOf,
	initial,
	intersection,
	join,
	last,
	lastIndexOf,
	nth,
	pull,
	pullAll,
	pullAt,
	remove,
	reverse,
	slice,
	sortedIndex,
	sortedUniq,
	sortedUniqBy,
	tail,
	take,
	takeRight,
	takeRightWhile,
	takeWhile,
	union,
	uniq,
	unzip,
	unzipWith,
	without,
	zip,
	zipObject,
} from './array';

import { add } from './maths';

import { groupBy } from './collection';

const _ = {
	//	Array Methods
	...array,

	//	Maths Methods
	...maths,

	//	Collection Methods
	...collection,
};

export default _;

export {
	//	Array Methods
	chunk,
	compact,
	concat,
	difference,
	differenceBy,
	drop,
	dropRight,
	first,
	fill,
	findIndex,
	findLastIndex,
	flatten,
	flattenDeep,
	flattenDepth,
	fromPairs,
	head,
	indexOf,
	initial,
	intersection,
	join,
	last,
	lastIndexOf,
	nth,
	pull,
	pullAll,
	pullAt,
	remove,
	reverse,
	slice,
	sortedIndex,
	sortedUniq,
	sortedUniqBy,
	tail,
	take,
	takeRight,
	takeRightWhile,
	takeWhile,
	union,
	uniq,
	unzip,
	unzipWith,
	without,
	zip,
	zipObject,
	// Maths Methods
	add,
	// Collection Methods
	groupBy,
};
