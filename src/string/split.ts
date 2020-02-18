import { isString } from '../utils/isString'
/**
 * Splits a string by the provided `delimiter`.
 *
 * @param delimiter - The separator pattern to split by.
 * @param sourceStr - The string to split.
 *
 * @returns An array containing the string segments.
 */
export const split = (delimiter: string, sourceStr: string) =>
  isString(sourceStr) ? sourceStr.split(delimiter) : ['']
