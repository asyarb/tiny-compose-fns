import { isString } from '../utils/isString'

/**
 * Start Cases the provided string.
 *
 * @param source - The string to Start Case.
 *
 * @returns The Start Cased string.
 */

export const startCase = (string: string) =>
  isString(string)
    ? string
        .replace(/_/g, ' ')
        .replace(/([a-z])([A-Z])/g, (_str, $1, $2) => $1 + ' ' + $2)
        .replace(/(\s|^)(\w)/g, (_str, $1, $2) => $1 + $2.toUpperCase())
    : ''
