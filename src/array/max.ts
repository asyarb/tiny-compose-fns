/**
 * Returns the maximal value from an array.
 *
 * @param numbers - The array to process.
 *
 * @returns The maximum value or undefined if array is falsey.
 */
export const max = (numbers: number[]) =>
  Array.isArray(numbers) && numbers.length !== 0
    ? Math.max(...numbers)
    : undefined
