# Alternate of Lodash Library

[![npm version](https://badge.fury.io/js/alt-lodash.svg)][npm_url]
[![downloads](https://img.shields.io/npm/dt/alt-lodash.svg)][npm_url]
[![license](https://img.shields.io/npm/l/alt-lodash.svg)][npm_url]

![Dependency Count](https://badgen.net/bundlephobia/dependency-count/alt-lodash)
![Types Included](https://badgen.net/npm/types/alt-lodash)
[![gzip size](https://img.badgesize.io/https:/unpkg.com/alt-lodash/dist/alt-lodash.cjs.production.min.js?label=gzip&compression=gzip)](https:/unpkg.com/alt-lodash/dist/alt-lodash.cjs.production.min.js)


[npm_url]: https://www.npmjs.org/package/alt-lodash

## Installation

With Yarn:

```bash
yarn add alt-lodash
```

With npm:

```bash
npm install alt-lodash
```

---------------

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
- dropRightWhile ( ❌ - Work in progress - PRs most welcome )
- dropWhile ( ❌ - Work in progress - PRs most welcome )
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
- nth
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
- xor ( ❌ - Work in progress - PRs most welcome )
- xorBy ( ❌ - Work in progress - PRs most welcome )
- xorWith ( ❌ - Work in progress - PRs most welcome )
- zip ✔️
- zipObject ✔️
- zipObjectDeep ( ❌ - Work in progress - PRs most welcome )
- zipWith ( ❌ - Work in progress - PRs most welcome )

-------------------------------

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
- keyBy ( ❌ - Work in progress - PRs most welcome )
- map ( ❌ - Work in progress - PRs most welcome )
- orderBy ( ❌ - Work in progress - PRs most welcome )
- partition ( ❌ - Work in progress - PRs most welcome )
- reduce ( ❌ - Work in progress - PRs most welcome )
- reduceRight ( ❌ - Work in progress - PRs most welcome )
- reject ( ❌ - Work in progress - PRs most welcome )
- sample ( ❌ - Work in progress - PRs most welcome )
- sampleSize ( ❌ - Work in progress - PRs most welcome )
- shuffle ( ❌ - Work in progress - PRs most welcome )
- size ( ❌ - Work in progress - PRs most welcome )
- some ( ❌ - Work in progress - PRs most welcome )
- sortBy ( ❌ - Work in progress - PRs most welcome )