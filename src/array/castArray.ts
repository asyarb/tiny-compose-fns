/**
 * Casts the provided value as an array if it's not one.
 *
 * @param value - The value to cast.
 *
 * @returns The cast array.
 */
export const castArray = <T>(value: T | T[]): T[] => {
  if (!value) return []

  return Array.isArray(value) ? value : [value]
}
