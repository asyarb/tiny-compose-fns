/**
 * Casts the provided value as an array if it's not one.
 *
 * @param value - The value to cast.
 *
 * @returns The cast array.
 */
export function castArray<T>(value: T): T[] {
  if (!arguments.length) return []

  return Array.isArray(value) ? value : [value]
}
