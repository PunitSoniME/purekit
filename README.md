# Alternate of Lodash Library

[![npm version](https://badge.fury.io/js/alt-lodash.svg)][npm_url]
[![license](https://img.shields.io/npm/l/alt-lodash.svg)][npm_url]
![Types Included](https://badgen.net/npm/types/alt-lodash)

[![weekly downloads](https://badgen.net/npm/dw/alt-lodash)][npm_url]
[![weekly downloads](https://badgen.net/npm/dm/alt-lodash)][npm_url]
[![downloads](https://img.shields.io/npm/dt/alt-lodash.svg)][npm_url]
![jsDelivr](https://badgen.net/jsdelivr/hits/npm/alt-lodash)

![Dependency Count](https://badgen.net/bundlephobia/dependency-count/alt-lodash)

![minified](https://badgen.net/bundlephobia/min/alt-lodash)
![gzip](https://badgen.net/bundlephobia/minzip/alt-lodash)


[npm_url]: https://www.npmjs.org/package/alt-lodash

# Installation

With Yarn:

```bash
yarn add alt-lodash
```

With npm:

```bash
npm install alt-lodash
```

<br />


# Usage

```ts
//  import all available the methods
import _ from 'alt-lodash';

or

//  import methods which you need instead of all ( to reduce the bundle size )
import { concat, chunk, forEach, filter } from 'alt-lodash';
```

<br />

# Available Methods

## Array

- chunk ✔️

    ```ts
    chunk(collection: [], [chunkSize = 1])
    ```

    ## Arguments
    
    ```bash
    collection (Array): The array to process.
    [chunkSize = 1] (number): The length of each chunk
    ```

    ## Returns
    
    ```bash
    (Array): Returns the new array of chunks.
    ```

- compact ✔️
- concat ✔️
- difference ✔️
- differenceBy ✔️
- differenceWith ( ❌ - Work in progress - PRs most welcome )
- drop ✔️
- dropRight ✔️
- dropRightWhile ✔️
- dropWhile ✔️
- fill ✔️
- findIndex ✔️
- findLastIndex ✔️
- first -> head ✔️
- flatten ✔️
- flattenDeep ✔️
- flattenDepth ✔️
- fromPairs ✔️
- head ✔️
- indexOf ✔️
- initial ✔️
- intersection ✔️
- intersectionBy ( ❌ - Work in progress - PRs most welcome )
- intersectionWith ( ❌ - Work in progress - PRs most welcome )
- join ✔️
- last ✔️
- lastIndexOf ✔️
- nth ✔️
- pull ✔️
- pullAll ✔️
- pullAllBy ( ❌ - Work in progress - PRs most welcome )
- pullAllWith ( ❌ - Work in progress - PRs most welcome )
- pullAt ✔️
- remove ✔️
- reverse ✔️
- slice ✔️
- sortedIndex ✔️
- sortedIndexBy ( ❌ - Work in progress - PRs most welcome )
- sortedIndexOf ( ❌ - Work in progress - PRs most welcome )
- sortedLastIndex ( ❌ - Work in progress - PRs most welcome )
- sortedLastIndexBy ( ❌ - Work in progress - PRs most welcome )
- sortedLastIndexOf ( ❌ - Work in progress - PRs most welcome )
- sortedUniq ✔️
- sortedUniqBy ✔️
- tail ✔️
- take ✔️
- takeRight ✔️
- takeRightWhile ✔️
- takeWhile ✔️
- union ✔️
- unionBy ( ❌ - Work in progress - PRs most welcome )
- unionWith ( ❌ - Work in progress - PRs most welcome )
- uniq ✔️
- uniqBy ( ❌ - Work in progress - PRs most welcome )
- uniqWith ( ❌ - Work in progress - PRs most welcome )
- unzip ✔️
- unzipWith ✔️
- without ✔️
- xor ✔️
- xorBy ( ❌ - Work in progress - PRs most welcome )
- xorWith ( ❌ - Work in progress - PRs most welcome )
- zip ✔️
- zipObject ✔️
- zipObjectDeep ( ❌ - Work in progress - PRs most welcome )
- zipWith ( ❌ - Work in progress - PRs most welcome )

-------------------------------
<br />

# Collection


- countBy ✔️

- each -> forEach ✔️
- eachRight -> forEachRight ✔️
- every ✔️
- filter ✔️
- find ✔️
- findLast ✔️
- flatMap ✔️
- flatMapDeep ✔️
- flatMapDepth ✔️
- forEach ✔️
- forEachRight ✔️
- groupBy ✔️
- includes ✔️
- invokeMap ( ❌ - Work in progress - PRs most welcome )
- keyBy ✔️
- map ✔️
- orderBy ✔️
- partition ✔️
- reduce ✔️
- reduceRight ✔️
- reject ✔️
- sample ✔️
- sampleSize ✔️
- shuffle ✔️
- size ✔️
- some ✔️
- sortBy ( ❌ - Work in progress - Code added, however it needs some modifications, PRs most welcome )

-------------------------------
<br />

# Dates


- now ( ❌ - Work in progress - PRs most welcome )


-------------------------------
<br />

# Function

- after ( ❌ - Work in progress - PRs most welcome )

- ary ( ❌ - Work in progress - PRs most welcome )
- before ( ❌ - Work in progress - PRs most welcome )
- bind ( ❌ - Work in progress - PRs most welcome )
- bindKey ( ❌ - Work in progress - PRs most welcome )
- curry ( ❌ - Work in progress - PRs most welcome )
- curryRight ( ❌ - Work in progress - PRs most welcome )
- debounce ( ❌ - Work in progress - PRs most welcome )
- defer ( ❌ - Work in progress - PRs most welcome )
- delay ( ❌ - Work in progress - PRs most welcome )
- flip ( ❌ - Work in progress - PRs most welcome )
- memoize ( ❌ - Work in progress - PRs most welcome )
- negate ( ❌ - Work in progress - PRs most welcome )
- once ( ❌ - Work in progress - PRs most welcome )
- overArgs ( ❌ - Work in progress - PRs most welcome )
- partial ( ❌ - Work in progress - PRs most welcome )
- partialRight ( ❌ - Work in progress - PRs most welcome )
- rearg ( ❌ - Work in progress - PRs most welcome )
- rest ( ❌ - Work in progress - PRs most welcome )
- spread ( ❌ - Work in progress - PRs most welcome )
- throttle ( ❌ - Work in progress - PRs most welcome )
- unary ( ❌ - Work in progress - PRs most welcome )
- wrap ( ❌ - Work in progress - PRs most welcome )

-------------------------------
<br />

# Lang

- castArray ✔️

- clone ✔️
- cloneDeep ✔️
- cloneDeepWith ( ❌ - Work in progress - PRs most welcome )
- cloneWith ( ❌ - Work in progress - PRs most welcome )
- conformsTo ✔️
- eq ( ❌ - Work in progress - PRs most welcome )
- gt ✔️
- gte ✔️
- isArguments ( ❌ - Work in progress - PRs most welcome )
- isArray ✔️
- isArrayBuffer ✔️
- isArrayLike ✔️
- isArrayLikeObject ✔️
- isBoolean ✔️
- isBuffer ✔️
- isDate ✔️
- isElement ✔️
- isEmpty ✔️
- isEqual ✔️
- isEqualWith ( ❌ - Work in progress - PRs most welcome )
- isError ✔️
- isFinite ✔️
- isFunction ✔️
- isInteger ✔️
- isLength ✔️
- isMap ✔️
- isMatch ( ❌ - Work in progress - PRs most welcome )
- isMatchWith ( ❌ - Work in progress - PRs most welcome )
- isNaN ✔️
- isNative ✔️
- isNil ✔️
- isNode ✔️ **New**
- isNull ✔️
- isNumber ✔️
- isObject ✔️
- isObjectLike ✔️
- isPlainObject ✔️
- isRegExp ✔️
- isSafeInteger ✔️
- isSet ✔️
- isString ✔️
- isSymbol ✔️
- isTypedArray ✔️
- isUndefined ✔️
- isWeakMap ✔️
- isWeakSet ✔️
- lt ✔️
- lte ✔️
- toArray ( ❌ - Work in progress - PRs most welcome )
- toFinite ( ❌ - Work in progress - PRs most welcome )
- toInteger ( ❌ - Work in progress - PRs most welcome )
- toLength ( ❌ - Work in progress - PRs most welcome )
- toNumber ( ❌ - Work in progress - PRs most welcome )
- toPlainObject ( ❌ - Work in progress - PRs most welcome )
- toSafeInteger ( ❌ - Work in progress - PRs most welcome )
- toString ( ❌ - Work in progress - PRs most welcome )

-------------------------------
<br />

# Math

- add ✔️

- ceil ✔️
- divide ✔️
- floor ✔️
- max ✔️
- maxBy ✔️
- mean ✔️
- meanBy ✔️
- min ✔️
- minBy ✔️
- multiply ✔️
- round ✔️
- subtract ✔️
- sum ✔️
- sumBy ✔️
- clamp ✔️
- inRange ✔️
- random ✔️

-------------------------------
<br />

# Number

- clamp ✔️

- inRange ✔️
- random ✔️

-------------------------------
<br />

# Object

- assign ( ❌ - Work in progress - PRs most welcome )

- assignIn ( ❌ - Work in progress - PRs most welcome )
- assignInWith ( ❌ - Work in progress - PRs most welcome )
- assignWith ( ❌ - Work in progress - PRs most welcome )
- at ( ❌ - Work in progress - PRs most welcome )
- create ( ❌ - Work in progress - PRs most welcome )
- defaults ( ❌ - Work in progress - PRs most welcome )
- defaultsDeep ( ❌ - Work in progress - PRs most welcome )
- entries -> toPairs ( ❌ - Work in progress - PRs most welcome )
- entriesIn -> toPairsIn ( ❌ - Work in progress - PRs most welcome )
- extend -> assignIn ( ❌ - Work in progress - PRs most welcome )
- extendWith -> assignInWith ( ❌ - Work in progress - PRs most welcome )
- findKey ( ❌ - Work in progress - PRs most welcome )
- findLastKey ( ❌ - Work in progress - PRs most welcome )
- forIn ( ❌ - Work in progress - PRs most welcome )
- forInRight ( ❌ - Work in progress - PRs most welcome )
- forOwn ( ❌ - Work in progress - PRs most welcome )
- forOwnRight ( ❌ - Work in progress - PRs most welcome )
- functions ( ❌ - Work in progress - PRs most welcome )
- functionsIn ( ❌ - Work in progress - PRs most welcome )
- get ( ❌ - Work in progress - PRs most welcome )
- has ( ❌ - Work in progress - PRs most welcome )
- hasIn ( ❌ - Work in progress - PRs most welcome )
- invert ( ❌ - Work in progress - PRs most welcome )
- invertBy ( ❌ - Work in progress - PRs most welcome )
- invoke ( ❌ - Work in progress - PRs most welcome )
- keys ( ❌ - Work in progress - PRs most welcome )
- keysIn ( ❌ - Work in progress - PRs most welcome )
- mapKeys ( ❌ - Work in progress - PRs most welcome )
- mapValues ( ❌ - Work in progress - PRs most welcome )
- merge ( ❌ - Work in progress - PRs most welcome )
- mergeWith ( ❌ - Work in progress - PRs most welcome )
- omit ( ❌ - Work in progress - PRs most welcome )
- omitBy ( ❌ - Work in progress - PRs most welcome )
- pick ( ❌ - Work in progress - PRs most welcome )
- pickBy ( ❌ - Work in progress - PRs most welcome )
- result ( ❌ - Work in progress - PRs most welcome )
- set ( ❌ - Work in progress - PRs most welcome )
- setWith ( ❌ - Work in progress - PRs most welcome )
- toPairs ( ❌ - Work in progress - PRs most welcome )
- toPairsIn ( ❌ - Work in progress - PRs most welcome )
- transform ( ❌ - Work in progress - PRs most welcome )
- unset ( ❌ - Work in progress - PRs most welcome )
- update ( ❌ - Work in progress - PRs most welcome )
- updateWith ( ❌ - Work in progress - PRs most welcome )
- values ( ❌ - Work in progress - PRs most welcome )
- valuesIn ( ❌ - Work in progress - PRs most welcome )

-------------------------------
<br />

# String

- camelCase ✔️

- capitalize ✔️
- deburr ( ❌ - Work in progress - PRs most welcome )
- endsWith ✔️
- escape ( ❌ - Work in progress - PRs most welcome )
- escapeRegExp ( ❌ - Work in progress - PRs most welcome )
- kebabCase ✔️
- lowerCase ✔️
- lowerFirst ✔️
- pad ( ❌ - Work in progress - PRs most welcome )
- padEnd ✔️
- padStart ✔️
- parseInt ✔️
- repeat ✔️
- replace ✔️
- snakeCase ✔️
- split ✔️
- startCase ✔️
- startsWith ✔️
- template ( ❌ - Work in progress - PRs most welcome )
- toLower ✔️
- toUpper ✔️
- trim ✔️
- trimEnd ✔️
- trimStart ✔️
- truncate ( ❌ - Work in progress - PRs most welcome )
- unescape ( ❌ - Work in progress - PRs most welcome )
- upperCase ✔️
- upperFirst ✔️
- words ( ❌ - Work in progress - PRs most welcome )