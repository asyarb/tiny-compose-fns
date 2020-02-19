import { isString } from '../utils/isString'

/**
 * Uppercases the first letter of the provided `string`.
 *
 * @param strng - The string to uppercase the first letter of.
 *
 * @returns A new string whose first letter will be capitalized.
 */
export const upperFirst = (string: string) =>
  isString(string) ? string.charAt(0).toUpperCase() + string.slice(1) : ''
