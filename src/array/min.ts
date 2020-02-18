/**
 * Returns the minimal value from an array.
 *
 * @param numbers - The array to process.
 *
 * @returns The minimum value or undefined if array is falsey.
 */
export const min = (numbers: number[]) =>
  Array.isArray(numbers) && numbers.length !== 0
    ? Math.min(...numbers)
    : undefined
