/**
 * Converts elements in the provided array into a string separated by separator.
 *
 * @param separator - The element separator.
 * @param data - The array to convert.
 *
 * @returns The joined string.
 */
export const join = <T>(separator: string, data: T[]) =>
  Array.isArray(data) ? data.join(separator) : ''
