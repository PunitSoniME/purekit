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

> <div style="font-size: 1.5rem; padding-top: 0.7rem; padding-bottom: 0.7rem; font-weight: bold">Supports Node version >= 12</div>

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
- differenceWith ✔️
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
- intersectionBy ✔️
- intersectionWith ✔️
- join ✔️
- last ✔️
- lastIndexOf ✔️
- nth ✔️
- pull ✔️
- pullAll ✔️
- pullAllBy ✔️
- pullAllWith ✔️
- pullAt ✔️
- remove ✔️
- reverse ✔️
- slice ✔️
- sortedIndex ✔️
- sortedIndexBy ✔️
- sortedIndexOf ✔️
- sortedLastIndex ✔️
- sortedLastIndexBy ✔️
- sortedLastIndexOf ✔️
- sortedUniq ✔️
- sortedUniqBy ✔️
- tail ✔️
- take ✔️
- takeRight ✔️
- takeRightWhile ✔️
- takeWhile ✔️
- union ✔️
- unionBy ✔️
- unionWith ✔️
- uniq ✔️
- uniqBy ✔️
- uniqWith ✔️
- unzip ✔️
- unzipWith ✔️
- without ✔️
- xor ✔️
- xorBy ✔️
- xorWith ✔️
- zip ✔️
- zipObject ✔️
- zipObjectDeep ( 🔜 - Work in progress - PRs most welcome )
- zipWith ✔️

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
- invokeMap ( 🔜 - Work in progress - PRs most welcome )
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
- sortBy ✔️

-------------------------------
<br />

# Dates


- now ✔️


-------------------------------
<br />

# Function

- after ✔️

- ary ✔️
- before ✔️
- bind ✔️
- bindKey ✔️
- curry ✔️
- curryRight ✔️
- debounce ✔️
- defer ( 🔜 - Work in progress - PRs most welcome )
- delay ✔️
- flip ✔️
- memoize ( 🔜 - Work in progress - PRs most welcome )
- negate ✔️
- once ✔️
- overArgs ✔️
- partial ✔️
- partialRight ✔️
- rearg ✔️
- rest ✔️
- spread ✔️
- throttle ( 🔜 - Work in progress - PRs most welcome )
- unary ✔️
- wrap ✔️

-------------------------------
<br />

# Lang

- castArray ✔️

- clone ✔️
- cloneDeep ✔️
- cloneDeepWith ( 🔜 - Work in progress - PRs most welcome )
- cloneWith ( 🔜 - Work in progress - PRs most welcome )
- conformsTo ✔️
- eq ✔️
- gt ✔️
- gte ✔️
- isArguments ( 🔜 - Work in progress - PRs most welcome )
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
- isEqualWith ✔️
- isError ✔️
- isFinite ✔️
- isFunction ✔️
- isInteger ✔️
- isLength ✔️
- isMap ✔️
- isMatch ( 🔜 - Work in progress - PRs most welcome )
- isMatchWith ( 🔜 - Work in progress - PRs most welcome )
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
- toArray ✔️
- toFinite ( 🔜 - Work in progress - PRs most welcome )
- toInteger ✔️
- toLength ( 🔜 - Work in progress - PRs most welcome )
- toNumber ✔️
- toPlainObject ( 🔜 - Work in progress - PRs most welcome )
- toSafeInteger ✔️
- toString ✔️

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

- assign ✔️

- assignIn ✔️
- assignInWith ( 🔜 - Work in progress - PRs most welcome )
- assignWith ( 🔜 - Work in progress - PRs most welcome )
- at ✔️
- create ✔️
- defaults ✔️
- defaultsDeep ( 🔜 - Work in progress - PRs most welcome )
- entries -> toPairs ✔️
- entriesIn -> toPairsIn ✔️
- extend -> assignIn ✔️
- extendWith -> assignInWith ( 🔜 - Work in progress - PRs most welcome )
- findKey ✔️
- findLastKey ✔️
- forIn ✔️
- forInRight ✔️
- forOwn ✔️
- forOwnRight ✔️
- functions ✔️
- functionsIn ✔️
- get ✔️
- has ✔️
- hasIn ( 🔜 - Work in progress - PRs most welcome )
- invert ✔️
- invertBy ( 🔜 - Work in progress - PRs most welcome )
- invoke ( 🔜 - Work in progress - PRs most welcome )
- keys ✔️
- keysIn ✔️
- mapKeys ✔️
- mapValues ( 🔜 - Work in progress - PRs most welcome )
- merge ✔️
- mergeWith ( 🔜 - Work in progress - PRs most welcome )
- omit ✔️
- omitBy ✔️
- pick ✔️
- pickBy ✔️
- result ( 🔜 - Work in progress - PRs most welcome )
- set ✔️
- setWith ( 🔜 - Work in progress - PRs most welcome )
- toPairs ✔️
- toPairsIn ✔️
- transform ( 🔜 - Work in progress - PRs most welcome )
- unset ✔️
- update ✔️
- updateWith ( 🔜 - Work in progress - PRs most welcome )
- values ✔️
- valuesIn ✔️

-------------------------------
<br />

# String

- camelCase ✔️

- capitalize ✔️
- deburr ( 🔜 - Work in progress - PRs most welcome )
- endsWith ✔️
- escape ✔️
- escapeRegExp ✔️
- kebabCase ✔️
- lowerCase ✔️
- lowerFirst ✔️
- pad ✔️
- padEnd ✔️
- padStart ✔️
- parseInt ✔️
- repeat ✔️
- replace ✔️
- snakeCase ✔️
- split ✔️
- startCase ✔️
- startsWith ✔️
- template ( 🔜 - Work in progress - PRs most welcome )
- toLower ✔️
- toUpper ✔️
- trim ✔️
- trimEnd ✔️
- trimStart ✔️
- truncate ( 🔜 - Work in progress - PRs most welcome )
- unescape ( 🔜 - Work in progress - PRs most welcome )
- upperCase ✔️
- upperFirst ✔️
- words ( 🔜 - Work in progress - PRs most welcome )

-------------------------------
<br />

# Util

- attempt ✔️

- bindAll ( 🔜 - Work in progress - PRs most welcome )
- cond ( 🔜 - Work in progress - PRs most welcome )
- conforms ✔️
- constant ✔️
- defaultTo ✔️
- flow ✔️
- flowRight ✔️
- identity ✔️
- iteratee ✔️
- matches ( 🔜 - Work in progress - PRs most welcome )
- matchesProperty ( 🔜 - Work in progress - PRs most welcome )
- method ( 🔜 - Work in progress - PRs most welcome )
- methodOf ( 🔜 - Work in progress - PRs most welcome )
- mixin ( 🔜 - Work in progress - PRs most welcome )
- noConflict ( 🔜 - Work in progress - PRs most welcome )
- noop ✔️
- nthArg ✔️
- over ✔️
- overEvery ✔️
- overSome ✔️
- property ✔️
- propertyOf ( 🔜 - Work in progress - PRs most welcome )
- range ✔️
- rangeRight ✔️
- runInContext ( 🔜 - Work in progress - PRs most welcome )
- stubArray ✔️
- stubFalse ✔️
- stubObject ✔️
- stubString ✔️
- stubTrue ✔️
- times ✔️
- toPath ✔️
- uniqueId ✔️

-------------------------------
<br />

# Seq

- _ ( 🔜 - Work in progress - PRs most welcome )

- ~~chain~~
- chain2 ✔️ ( Alternate of chain method with minimal code )


    ```ts
    chain2(value)
    ```

    ## Arguments
    
    ```bash
    value (*): The value to wrap.
    ```

    ## Returns
    
    ```bash
    (Object): Returns the new wrapper instance.
    ```

    ## Example
    
    ```typescript
    import { chain2, map, sortBy, head } from 'alt-lodash';

    const users = [
        { 'user': 'barney', 'age': 36 },
        { 'user': 'fred', 'age': 40 },
        { 'user': 'pebbles', 'age': 1 }
    ];

    const youngest = chain2(users)
        .fn(sortBy, 'age')
        .fn(map, (function (o: any) {
            return o.user + ' is ' + o.age;
        }))
        .fn(head)
        .value();

    // => 'pebbles is 1'
    ```


- tap ( 🔜 - Work in progress - PRs most welcome )
- thru ( 🔜 - Work in progress - PRs most welcome )
- prototype[Symbol.iterator] ( 🔜 - Work in progress - PRs most welcome )
- prototype.at ( 🔜 - Work in progress - PRs most welcome )
- prototype.chain ( 🔜 - Work in progress - PRs most welcome )
- prototype.commit ( 🔜 - Work in progress - PRs most welcome )
- prototype.next ( 🔜 - Work in progress - PRs most welcome )
- prototype.plant ( 🔜 - Work in progress - PRs most welcome )
- prototype.reverse ( 🔜 - Work in progress - PRs most welcome )
- prototype.toJSON -> value ( 🔜 - Work in progress - PRs most welcome )
- prototype.value ( 🔜 - Work in progress - PRs most welcome )
- prototype.valueOf -> value ( 🔜 - Work in progress - PRs most welcome )
