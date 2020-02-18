/**
 * Creates a slice of an array with `amount` elements taken from the start.
 *
 * @param amount - The number of elements to take.
 * @param data - The array to query.
 *
 * @returns A new array containing the slice of `array`.
 */
export const take = <T>(amount: number = 1, data: T[]) => {
  if (!Array.isArray(data)) return []

  return data.slice(0, amount === null ? 1 : amount < 0 ? 0 : amount)
}
