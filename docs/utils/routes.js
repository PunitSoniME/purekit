const routes = [
    {
        id: 'array',
        name: 'Array',
        options: [
            { label: 'chunk' },
            { label: 'compact' },
            { label: 'concat' },
            { label: 'difference' },
            { label: 'differenceBy' },
            { label: 'differenceWith' },
            { label: 'drop' },
            { label: 'dropRight' },
            { label: 'dropRightWhile' },
            { label: 'dropWhile' },
            { label: 'fill' },
            { label: 'findIndex' },
            { label: 'findLastIndex' },
            { label: 'first' },
            { label: 'flatten' },
            { label: 'flattenDeep' },
            { label: 'flattenDepth' },
            { label: 'fromPairs' },
            { label: 'head' },
            { label: 'indexOf' },
            { label: 'initial' },
            { label: 'intersection' },
            { label: 'intersectionBy' },
            { label: 'intersectionWith' },
            { label: 'join' },
            { label: 'last' },
            { label: 'lastIndexOf' },
            { label: 'nth' },
            { label: 'pull' },
            { label: 'pullAll' },
            { label: 'pullAllBy' },
            { label: 'pullAllWith' },
            { label: 'pullAt' },
            { label: 'remove' },
            { label: 'reverse' },
            { label: 'slice' },
            { label: 'sortedIndex' },
            { label: 'sortedIndexBy' },
            { label: 'sortedIndexOf' },
            { label: 'sortedLastIndex' },
            { label: 'sortedLastIndexBy' },
            { label: 'sortedLastIndexOf' },
            { label: 'sortedUniq' },
            { label: 'sortedUniqBy' },
            { label: 'tail' },
            { label: 'take' },
            { label: 'takeRight' },
            { label: 'takeRightWhile' },
            { label: 'takeWhile' },
            { label: 'union' },
            { label: 'unionBy' },
            { label: 'unionWith' },
            { label: 'uniq' },
            { label: 'uniqBy' },
            { label: 'uniqWith' },
            { label: 'unshift', isNew: true },
            { label: 'unzip' },
            { label: 'unzipWith' },
            { label: 'without' },
            { label: 'xor' },
            { label: 'xorBy' },
            { label: 'xorWith' },
            { label: 'zip' },
            { label: 'zipObject' },
            // { label: 'zipObjectDeep' },
            { label: 'zipWith' },
        ],
    },
    {
        id: 'collection',
        name: 'Collection',
        options: [
            { label: 'countBy' },
            { label: 'each' },
            { label: 'eachRight' },
            { label: 'every' },
            { label: 'filter' },
            { label: 'find' },
            { label: 'findLast' },
            { label: 'flatMap' },
            { label: 'flatMapDeep' },
            { label: 'flatMapDepth' },
            { label: 'forEach' },
            { label: 'forEachRight' },
            { label: 'freeze', isNew: true },
            { label: 'groupBy' },
            { label: 'includes' },
            { label: 'invokeMap' },
            { label: 'keyBy' },
            { label: 'map' },
            { label: 'orderBy' },
            { label: 'partition' },
            { label: 'preventExtensions', isNew: true },
            { label: 'reduce' },
            { label: 'reduceRight' },
            { label: 'reject' },
            { label: 'sample' },
            { label: 'sampleSize' },
            { label: 'seal', isNew: true },
            { label: 'shuffle' },
            { label: 'size' },
            { label: 'some' },
            { label: 'sortBy' },

        ],
    },
    {
        id: 'date',
        name: 'Date',
        options: [
            { label: 'now' },
        ]
    },
    {
        id: 'function',
        name: 'Function',
        options: [
            { label: 'after' },
            { label: 'ary' },
            { label: 'before' },
            { label: 'bind' },
            { label: 'bindKey' },
            { label: 'curry' },
            { label: 'curryRight' },
            { label: 'debounce' },
            { label: 'defer' },
            { label: 'delay' },
            { label: 'flip' },
            { label: 'memoize' },
            { label: 'negate' },
            { label: 'once' },
            { label: 'overArgs' },
            { label: 'partial' },
            { label: 'partialRight' },
            { label: 'rearg' },
            { label: 'rest' },
            { label: 'spread' },
            { label: 'throttle' },
            { label: 'unary' },
            { label: 'wrap' },
        ]
    },
    // {
    //     id: 'lang',
    //     name: 'Lang',
    //     options: [
    //         { label: 'castArray' },
    //         { label: 'clone' },
    //         { label: 'cloneDeep' },
    //         { label: 'cloneDeepWith' },
    //         { label: 'cloneWith' },
    //         { label: 'conformsTo' },
    //         { label: 'eq' },
    //         { label: 'gt' },
    //         { label: 'gte' },
    //         { label: 'isArguments' },
    //         { label: 'isArray' },
    //         { label: 'isArrayBuffer' },
    //         { label: 'isArrayLike' },
    //         { label: 'isArrayLikeObject' },
    //         { label: 'isBoolean' },
    //         { label: 'isBuffer' },
    //         { label: 'isDate' },
    //         { label: 'isElement' },
    //         { label: 'isEmpty' },
    //         { label: 'isEqual' },
    //         { label: 'isEqualWith' },
    //         { label: 'isError' },
    //         { label: 'isExtensible', isNew: true },
    //         { label: 'isFinite' },
    //         { label: 'isFrozen', isNew: true },
    //         { label: 'isFunction' },
    //         { label: 'isInteger' },
    //         { label: 'isLength' },
    //         { label: 'isMap' },
    //         { label: 'isMatch' },
    //         { label: 'isMatchWith' },
    //         { label: 'isNaN' },
    //         { label: 'isNative' },
    //         { label: 'isNil' },
    //         { label: 'isNode', isNew: true },
    //         { label: 'isNull' },
    //         { label: 'isNumber' },
    //         { label: 'isObject' },
    //         { label: 'isObjectLike' },
    //         { label: 'isPlainObject' },
    //         { label: 'isRegExp' },
    //         { label: 'isSafeInteger' },
    //         { label: 'isSealed', isNew: true },
    //         { label: 'isSet' },
    //         { label: 'isString' },
    //         { label: 'isSymbol' },
    //         { label: 'isTypedArray' },
    //         { label: 'isUndefined' },
    //         { label: 'isWeakMap' },
    //         { label: 'isWeakSet' },
    //         { label: 'lt' },
    //         { label: 'lte' },
    //         { label: 'toArray' },
    //         { label: 'toFinite' },
    //         { label: 'toInteger' },
    //         { label: 'toLength' },
    //         { label: 'toNumber' },
    //         { label: 'toPlainObject' },
    //         { label: 'toSafeInteger' },
    //         { label: 'toString' },
    //     ]
    // },
    // {
    //     id: 'math',
    //     name: 'Math',
    //     options: [
    //         { label: 'add' },
    //         { label: 'ceil' },
    //         { label: 'divide' },
    //         { label: 'floor' },
    //         { label: 'max' },
    //         { label: 'maxBy' },
    //         { label: 'mean' },
    //         { label: 'meanBy' },
    //         { label: 'min' },
    //         { label: 'minBy' },
    //         { label: 'multiply' },
    //         { label: 'round' },
    //         { label: 'subtract' },
    //         { label: 'sum' },
    //         { label: 'sumBy' },
    //     ]
    // },
    // {
    //     id: 'number',
    //     name: 'Number',
    //     options: [
    //         { label: 'clamp' },
    //         { label: 'inRange' },
    //         { label: 'random' },
    //     ]
    // },
    // {
    //     id: 'object',
    //     name: 'Object',
    //     options: [
    //         { label: 'assign' },
    //         { label: 'assignIn' },
    //         { label: 'assignInWith' },
    //         { label: 'assignWith' },
    //         { label: 'at' },
    //         { label: 'create' },
    //         { label: 'defaults' },
    //         { label: 'defaultsDeep' },
    //         { label: 'entries' },
    //         { label: 'entriesIn' },
    //         { label: 'extend' },
    //         { label: 'extendWith' },
    //         { label: 'findKey' },
    //         { label: 'findLastKey' },
    //         { label: 'forIn' },
    //         { label: 'forInRight' },
    //         { label: 'forOwn' },
    //         { label: 'forOwnRight' },
    //         { label: 'functions' },
    //         { label: 'functionsIn' },
    //         { label: 'get' },
    //         { label: 'has' },
    //         { label: 'hasIn' },
    //         { label: 'invert' },
    //         { label: 'invertBy' },
    //         { label: 'invoke' },
    //         { label: 'keys' },
    //         { label: 'keysIn' },
    //         { label: 'mapKeys' },
    //         { label: 'mapValues' },
    //         { label: 'merge' },
    //         { label: 'mergeWith' },
    //         { label: 'omit' },
    //         { label: 'omitBy' },
    //         { label: 'pick' },
    //         { label: 'pickBy' },
    //         { label: 'result' },
    //         { label: 'set' },
    //         { label: 'setWith' },
    //         { label: 'toPairs' },
    //         { label: 'toPairsIn' },
    //         { label: 'transform' },
    //         { label: 'unset' },
    //         { label: 'update' },
    //         { label: 'updateWith' },
    //         { label: 'values' },
    //         { label: 'valuesIn' },
    //     ]
    // },
    // {
    //     id: 'seq',
    //     name: 'Seq',
    //     options: [
    //         { label: 'chain2' },
    //         { label: 'tap2' },
    //         { label: 'thru' },
    //     ]
    // },
    // {
    //     id: 'string',
    //     name: 'String',
    //     options: [
    //         { label: 'camelCase' },
    //         { label: 'capitalize' },
    //         { label: 'deburr' },
    //         { label: 'endsWith' },
    //         { label: 'escape' },
    //         { label: 'escapeRegExp' },
    //         { label: 'kebabCase' },
    //         { label: 'lowerCase' },
    //         { label: 'lowerFirst' },
    //         { label: 'pad' },
    //         { label: 'padEnd' },
    //         { label: 'padStart' },
    //         { label: 'parseInt' },
    //         { label: 'repeat' },
    //         { label: 'replace' },
    //         { label: 'snakeCase' },
    //         { label: 'split' },
    //         { label: 'startCase' },
    //         { label: 'startsWith' },
    //         { label: 'template' },
    //         { label: 'toLower' },
    //         { label: 'toUpper' },
    //         { label: 'trim' },
    //         { label: 'trimEnd' },
    //         { label: 'trimStart' },
    //         { label: 'truncate' },
    //         { label: 'unescape' },
    //         { label: 'upperCase' },
    //         { label: 'upperFirst' },
    //         { label: 'words' },
    //     ]
    // },
    // {
    //     id: 'util',
    //     name: 'Util',
    //     options: [
    //         { label: 'attempt' },
    //         { label: 'bindAll' },
    //         { label: 'cond' },
    //         { label: 'conforms' },
    //         { label: 'constant' },
    //         { label: 'defaultTo' },
    //         { label: 'flow' },
    //         { label: 'flowRight' },
    //         { label: 'identity' },
    //         { label: 'iteratee' },
    //         { label: 'matches' },
    //         { label: 'matchesProperty' },
    //         { label: 'method' },
    //         { label: 'methodOf' },
    //         { label: 'mixin' },
    //         { label: 'noConflict' },
    //         { label: 'noop' },
    //         { label: 'nthArg' },
    //         { label: 'over' },
    //         { label: 'overEvery' },
    //         { label: 'overSome' },
    //         { label: 'property' },
    //         { label: 'propertyOf' },
    //         { label: 'range' },
    //         { label: 'rangeRight' },
    //         { label: 'runInContext' },
    //         { label: 'sleep', isNew: true },
    //         { label: 'stubArray' },
    //         { label: 'stubFalse' },
    //         { label: 'stubObject' },
    //         { label: 'stubString' },
    //         { label: 'stubTrue' },
    //         { label: 'times' },
    //         { label: 'toPath' },
    //         { label: 'uniqueId' },
    //         { label: 'uniqueId2', isNew: true },
    //     ]
    // },
];

export default routes;