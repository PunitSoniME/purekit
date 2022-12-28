/**
 *
 * @param value
 * @returns true if passed value is a valid dom element
 */
const isElement = (value: any): boolean => {
    return typeof HTMLElement === "object" ? value instanceof HTMLElement : //DOM2
        value && typeof value === "object" && value !== null && value.nodeType === 1 && typeof value.nodeName === "string"
}
export default isElement;
