/**
 * Creates a new array by running map() over it, then flattenining the result into a new array. Is more efficient than running map() then flat() separately.
 *
 * @param callback - Function that is invoked per element.
 * @param array - The array to process.
 *
 * @return A new array containing the mapped and flattened values.
 */
export const flatMap = <T>(
  callback: (currentValue: T, index: number, array: T[]) => void,
  array: T[]
) => (Array.isArray(array) ? array.flatMap(callback) : [])
