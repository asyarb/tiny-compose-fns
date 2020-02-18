import { isString } from '../utils/isString'

/**
 * Replaces matched patterns in a string.
 *
 * @param pattern - RegExp or string to match.
 * @param replacement - String to replace matched patterns with.
 * @param source - String to modify.
 *
 * @returns A new modified string.
 */
export const replace = (
  pattern: RegExp | string,
  replacement: string,
  source: string
) => (isString(source) ? source.replace(pattern, replacement) : '')
