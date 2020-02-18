import { isString } from '../utils/isString'

/**
 * kebab-cases the provided string.
 *
 * @param string - The string to kebab-case.
 */
export const kebabCase = (string: string) => {
  if (!isString(string) || string === '') return ''

  return string
    .trim()
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\W/g, m => (/[À-ž]/.test(m) ? m : '-'))
    .replace(/^-+|-+$/g, '')
    .toLowerCase()
}
