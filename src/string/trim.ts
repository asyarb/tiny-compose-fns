import { isString } from '../utils/isString'

/**
 * Removes leading and trailing whitespace from `string`.
 *
 * @param string - The string to trim.
 *
 * @returns A new trimmed string.
 */
export const trim = (string: string) => (isString(string) ? string.trim() : '')
