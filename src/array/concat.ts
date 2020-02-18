import { castArray } from './castArray'

/**
 * Creates a new array concatenating the provided array with any additional arrays and/or values.
 *
 * @param array - The array to concatenate.
 * @param values - The values to concatenate.
 */
export const concat = <T1, T2>(array: T1[], values: T2) =>
  Array.isArray(array) ? [...array, ...castArray(values)] : [array]
