import * as array from './array';
import * as collection from './collection';
import * as date from './date';
import * as func from './function';
import * as lang from './lang';
import * as math from './math';
import * as num from './number';
import * as obj from './object';
import * as str from './string';
import * as seq from './seq';
import * as util from './util';

import {
	chunk,
	compact,
	concat,
	difference,
	differenceBy,
	differenceWith,
	drop,
	dropRight,
	dropRightWhile,
	dropWhile,
	fill,
	findIndex,
	findLastIndex,
	first,
	flatten,
	flattenDeep,
	flattenDepth,
	fromPairs,
	head,
	indexOf,
	initial,
	intersection,
	intersectionBy,
	intersectionWith,
	join,
	last,
	lastIndexOf,
	nth,
	pull,
	pullAll,
	pullAllBy,
	pullAllWith,
	pullAt,
	remove,
	reverse,
	slice,
	sortedIndex,
	sortedIndexBy,
	sortedIndexOf,
	sortedLastIndex,
	sortedLastIndexBy,
	sortedLastIndexOf,
	sortedUniq,
	sortedUniqBy,
	tail,
	take,
	takeRight,
	takeRightWhile,
	takeWhile,
	union,
	unionBy,
	unionWith,
	uniq,
	uniqBy,
	uniqWith,
	unshift,
	unzip,
	unzipWith,
	without,
	xor,
	xorBy,
	xorWith,
	zip,
	zipObject,
	zipWith,
} from './array';

import {
	countBy,
	each,
	eachRight,
	every,
	filter,
	find,
	findLast,
	flatMap,
	flatMapDeep,
	flatMapDepth,
	forEach,
	forEachRight,
	freeze,
	groupBy,
	includes,
	invokeMap,
	keyBy,
	map,
	orderBy,
	partition,
	preventExtensions,
	reduce,
	reduceRight,
	reject,
	sample,
	sampleSize,
	seal,
	shuffle,
	size,
	some,
	sortBy,
} from './collection';

import { now } from './date';

import {
	after,
	ary,
	before,
	bind,
	bindKey,
	curry,
	curryRight,
	debounce,
	defer,
	delay,
	flip,
	negate,
	once,
	overArgs,
	partial,
	partialRight,
	rearg,
	rest,
	spread,
	unary,
	wrap,
} from './function';

import {
	add,
	ceil,
	divide,
	floor,
	max,
	maxBy,
	mean,
	meanBy,
	min,
	minBy,
	multiply,
	round,
	subtract,
	sum,
	sumBy,
} from './math';

import { clamp, inRange, random } from './number';

import {
	assign,
	assignIn,
	assignInWith,
	assignWith,
	at,
	create,
	defaults,
	defaultsDeep,
	entries,
	extend,
	extendWith,
	findKey,
	findLastKey,
	forIn,
	forInRight,
	forOwn,
	forOwnRight,
	functions,
	functionsIn,
	get,
	has,
	hasIn,
	invert,
	invertBy,
	keys,
	keysIn,
	mapKeys,
	mapValues,
	merge,
	mergeWith,
	omit,
	omitBy,
	pick,
	pickBy,
	set,
	setWith,
	toPairs,
	toPairsIn,
	transform,
	unset,
	update,
	updateWith,
	values,
	valuesIn,
} from './object';

import {
	castArray,
	clone,
	cloneDeep,
	cloneWith,
	conformsTo,
	eq,
	gt,
	gte,
	isArguments,
	isArray,
	isArrayBuffer,
	isArrayLike,
	isArrayLikeObject,
	isBoolean,
	isBuffer,
	isDate,
	isElement,
	isEmpty,
	isEqual,
	isEqualWith,
	isError,
	isExtensible,
	isFinite,
	isFrozen,
	isFunction,
	isInteger,
	isLength,
	isMap,
	isMatch,
	isMatchWith,
	isNaN,
	isNative,
	isNil,
	isNull,
	isNumber,
	isObject,
	isObjectLike,
	isPlainObject,
	isRegExp,
	isSafeInteger,
	isSealed,
	isSet,
	isString,
	isSymbol,
	isTypedArray,
	isUndefined,
	isWeakMap,
	isWeakSet,
	lt,
	lte,
	toArray,
	toFinite,
	toInteger,
	toLength,
	toNumber,
	toPlainObject,
	toSafeInteger,
	toString,
} from './lang';

import { chain2, tap2, thru } from './seq';

import {
	camelCase,
	capitalize,
	endsWith,
	escape,
	escapeRegExp,
	kebabCase,
	lowerCase,
	lowerFirst,
	pad,
	padEnd,
	padStart,
	parseInt,
	repeat,
	replace,
	snakeCase,
	split,
	startCase,
	startsWith,
	toLower,
	toUpper,
	trim,
	trimEnd,
	trimStart,
	unescape,
	upperCase,
	upperFirst,
	words,
} from './string';

import {
	attempt,
	cond,
	conforms,
	constant,
	defaultTo,
	flow,
	flowRight,
	identity,
	iteratee,
	method,
	methodOf,
	noop,
	nthArg,
	over,
	overEvery,
	overSome,
	property,
	propertyOf,
	range,
	rangeRight,
	sleep,
	stubArray,
	stubFalse,
	stubObject,
	stubString,
	stubTrue,
	times,
	toPath,
	uniqueId,
	uniqueId2,
} from './util';

const _ = {
	//	Array Methods
	...array,

	//	Collection Methods
	...collection,

	//	Date Methods
	...date,

	//	Function Methods
	...func,

	//	Math Methods
	...math,

	//	Number Methods
	...num,

	//	Object Methods
	...obj,

	//	Seq Methods
	...seq,

	//	String Methods
	...str,

	//	Lang Methods
	...lang,

	//	Util Methods
	...util,
};

export {
	//	Array Methods
	chunk,
	compact,
	concat,
	difference,
	differenceBy,
	differenceWith,
	drop,
	dropRight,
	dropRightWhile,
	dropWhile,
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
	intersectionBy,
	intersectionWith,
	join,
	last,
	lastIndexOf,
	nth,
	pull,
	pullAll,
	pullAllBy,
	pullAllWith,
	pullAt,
	remove,
	reverse,
	slice,
	sortedIndex,
	sortedIndexBy,
	sortedIndexOf,
	sortedLastIndex,
	sortedLastIndexBy,
	sortedLastIndexOf,
	sortedUniq,
	sortedUniqBy,
	tail,
	take,
	takeRight,
	takeRightWhile,
	takeWhile,
	union,
	unionBy,
	unionWith,
	uniq,
	uniqBy,
	uniqWith,
	unshift,
	unzip,
	unzipWith,
	without,
	xor,
	xorBy,
	xorWith,
	zip,
	zipObject,
	zipWith,
	// Collection Methods
	countBy,
	each,
	eachRight,
	every,
	filter,
	find,
	findLast,
	flatMap,
	flatMapDeep,
	flatMapDepth,
	forEach,
	forEachRight,
	freeze,
	groupBy,
	includes,
	invokeMap,
	keyBy,
	map,
	orderBy,
	partition,
	preventExtensions,
	reduce,
	reduceRight,
	reject,
	sample,
	sampleSize,
	seal,
	shuffle,
	size,
	some,
	sortBy,
	//	Date Methods
	now,
	//	Function Methods
	after,
	ary,
	before,
	bind,
	bindKey,
	curry,
	curryRight,
	debounce,
	defer,
	delay,
	flip,
	negate,
	once,
	overArgs,
	partial,
	partialRight,
	rearg,
	rest,
	spread,
	unary,
	wrap,
	//	Lang Methods
	castArray,
	clone,
	cloneDeep,
	cloneWith,
	conformsTo,
	eq,
	gt,
	gte,
	isArguments,
	isArray,
	isArrayBuffer,
	isArrayLike,
	isArrayLikeObject,
	isBoolean,
	isBuffer,
	isDate,
	isElement,
	isEmpty,
	isEqual,
	isEqualWith,
	isError,
	isExtensible,
	isFinite,
	isFrozen,
	isFunction,
	isInteger,
	isLength,
	isMap,
	isMatch,
	isMatchWith,
	isNaN,
	isNative,
	isNil,
	isNull,
	isNumber,
	isObject,
	isObjectLike,
	isPlainObject,
	isRegExp,
	isSafeInteger,
	isSealed,
	isSet,
	isString,
	isSymbol,
	isTypedArray,
	isUndefined,
	isWeakMap,
	isWeakSet,
	lt,
	lte,
	toArray,
	toFinite,
	toInteger,
	toLength,
	toNumber,
	toPlainObject,
	toSafeInteger,
	toString,
	// Math Methods
	add,
	ceil,
	divide,
	floor,
	max,
	maxBy,
	mean,
	meanBy,
	min,
	minBy,
	multiply,
	round,
	subtract,
	sum,
	sumBy,
	//	Number Methods
	clamp,
	inRange,
	random,
	//	Object Methods
	assign,
	assignIn,
	assignInWith,
	assignWith,
	at,
	create,
	defaults,
	defaultsDeep,
	entries,
	extend,
	extendWith,
	findKey,
	findLastKey,
	forIn,
	forInRight,
	forOwn,
	forOwnRight,
	functions,
	functionsIn,
	get,
	has,
	hasIn,
	invert,
	invertBy,
	keys,
	keysIn,
	mapKeys,
	mapValues,
	merge,
	mergeWith,
	omit,
	omitBy,
	pick,
	pickBy,
	set,
	setWith,
	toPairs,
	toPairsIn,
	transform,
	unset,
	update,
	updateWith,
	values,
	valuesIn,
	//	Seq Methods
	chain2,
	tap2,
	thru,
	//	String Methods
	camelCase,
	capitalize,
	endsWith,
	escape,
	escapeRegExp,
	kebabCase,
	lowerCase,
	lowerFirst,
	pad,
	padEnd,
	padStart,
	parseInt,
	repeat,
	replace,
	snakeCase,
	split,
	startCase,
	startsWith,
	toLower,
	toUpper,
	trim,
	trimEnd,
	trimStart,
	unescape,
	upperCase,
	upperFirst,
	words,
	//	Util Methods
	attempt,
	cond,
	conforms,
	constant,
	defaultTo,
	flow,
	flowRight,
	identity,
	iteratee,
	method,
	methodOf,
	noop,
	nthArg,
	over,
	overEvery,
	overSome,
	property,
	propertyOf,
	range,
	rangeRight,
	sleep,
	stubArray,
	stubFalse,
	stubObject,
	stubString,
	stubTrue,
	times,
	toPath,
	uniqueId,
	uniqueId2,
};

export default _;
