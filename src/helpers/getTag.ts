/**
 * Get the string tag of a value.
 * @private
 *
 * @param val - The value to get the string tag of.
 *
 * @returns The string tag of the provided value.
 */
export const getTag = (val: unknown) => toString.call(val)
