import { isString } from '../utils/isString'

/**
 * Uppercases the first character in the provided `string`.
 *
 * @param string - The string to uppercaseFirst.
 *
 * @returns A new string whose first character is Uppercased.
 */
export const uppercase = (string: string) =>
  isString(string) ? string.toUpperCase() : ''
