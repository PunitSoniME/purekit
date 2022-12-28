/**
 *
 * @param value
 * @returns true if passed value is a valid dom node
 */
const isNode = (value: any): boolean => {
    return typeof Node === "object" ? value instanceof Node :
        value && typeof value === "object" && typeof value.nodeType === "number" && typeof value.nodeName === "string"
}
export default isNode;
