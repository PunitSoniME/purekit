import createPredicate from '../util/createPredicate';

const findLastIndex = <T>(
  collection: T[],
  predicate:
    | string
    //  | [string, any] //  this type is giving lint error of map
    | Record<string, any>
    | ((item: T) => boolean) = x => !!x,
  fromIndex = 0
): number => {
  if (!Array.isArray(collection)) return -1;
  const fn = createPredicate(predicate);
  for (let i = collection.length - 1; i >= fromIndex; i--) {
    if ((fn as any)(collection[i], i, collection)) {
      return i;
    }
  }
  return -1;
};

export default findLastIndex;
