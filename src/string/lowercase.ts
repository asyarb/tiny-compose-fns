import { isString } from '../utils/isString'

/**
 * Converts a string to lowercase.
 *
 * @param string - The string to convert.
 *
 * @returns A lowercased copy of the string.
 */
export const lowercase = (string: string) =>
  isString(string) ? string.toLowerCase() : ''
