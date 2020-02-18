import { isString } from '../utils/isString'

/**
 * Determines whether a string begins with the specified characters.
 *
 * @param startString - The specified characters to check for.
 * @param string - The string to check.
 *
 * @returns `true` if `startString` is at the beginning of the provided string, `false` otherwise.
 */
export const startsWith = (startString: string, string: string) =>
  isString(string) ? string.startsWith(startString, 0) : false
