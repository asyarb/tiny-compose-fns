import { isString } from './utils'

/**
 * Checks if a string begins with a provided substring.
 *
 * @param {string} val - starting value to check for in string.
 * @param {string} str - string to check.
 * @param {number} start - start index to check from.
 */
export const startsWith = (val, str, start = 0) =>
  isString(str) ? str.startsWith(val, start) : false

/**
 *
 * @param {regex} regex - pattern to match
 * @param {string} replacement - string to replace instances of matched pattern with.
 * @param {string} str - string to pattern match against.
 */
export const replace = (regex, replacement, str) =>
  isString(str) ? str.replace(regex, replacement) : ''

/**
 * Returns an array of strings based on the provided delimiter
 *
 * @param {string} delim - delimiter
 * @param {string} str - string to split
 */
export const split = (delim, str) => (isString(str) ? str.split(delim) : [''])

/**
 * Returns a new copy of a string that has been lowercased.
 *
 * @param {string} str - string to lowercase.
 */
export const lowercase = str => (isString(str) ? str.toLowerCase() : '')

/**
 * Returns a new copy of a string that has been uppercased.
 *
 * @param {string} str - string to uppercase.
 */
export const uppercase = str => (isString(str) ? str.toUpperCase() : '')

/**
 * Uppercase the first character in a string.
 *
 * @param {string} str - the string to uppercase the first character of.
 */
export const upperFirst = str =>
  isString(str) ? str.charAt(0).toUpperCase() + str.slice(1) : ''

/**
 * Camelcases the provided string.
 *
 * @param {string} str - the string to uppercase the first character of.
 */
export const camelCase = str => {
  if (!isString(str) || str === '') return ''

  const listNames = str.split(/[\s,_-]+/)
  let objectName = ''

  for (let x = 0; x < listNames.length; x++) {
    let item = listNames[x]
    objectName += item[0].toUpperCase() + item.substring(1).toLowerCase()
  }

  return objectName[0].toLowerCase() + objectName.substring(1)
}

/**
 * kebabCases the provided string.
 *
 * @param {string} str - the string to kebab-case.
 */
export const kebabCase = str => {
  if (!isString(str) || str === '') return ''

  return str
    .trim()
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\W/g, m => (/[À-ž]/.test(m) ? m : '-'))
    .replace(/^-+|-+$/g, '')
    .toLowerCase()
}

/**
 * Startcases the provided string.
 *
 * @param {string} str - the string to uppercase the first character of.
 */

export const startCase = str =>
  isString(str)
    ? str
        .replace(/_/g, ' ')
        .replace(/([a-z])([A-Z])/g, (str, $1, $2) => $1 + ' ' + $2)
        .replace(/(\s|^)(\w)/g, (str, $1, $2) => $1 + $2.toUpperCase())
    : ''

/**
 * Removes leading and trailing white space from a string.
 *
 * @param {string} str
 */
export const trim = str => (isString(str) ? str.trim() : '')
