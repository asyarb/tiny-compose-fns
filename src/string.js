import { isString } from './utils'

export const startsWith = (val, str) =>
  isString(str) ? str.startsWith(val, 0) : false

export const replace = (regex, replacement, str) =>
  isString(str) ? str.replace(regex, replacement) : ''

export const split = (delim, str) => (isString(str) ? str.split(delim) : [''])

export const lowercase = str => (isString(str) ? str.toLowerCase() : '')

export const uppercase = str => (isString(str) ? str.toUpperCase() : '')

export const upperFirst = str =>
  isString(str) ? str.charAt(0).toUpperCase() + str.slice(1) : ''

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

export const kebabCase = str => {
  if (!isString(str) || str === '') return ''

  return str
    .trim()
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\W/g, m => (/[À-ž]/.test(m) ? m : '-'))
    .replace(/^-+|-+$/g, '')
    .toLowerCase()
}

export const startCase = str =>
  isString(str)
    ? str
        .replace(/_/g, ' ')
        .replace(/([a-z])([A-Z])/g, (str, $1, $2) => $1 + ' ' + $2)
        .replace(/(\s|^)(\w)/g, (str, $1, $2) => $1 + $2.toUpperCase())
    : ''

export const trim = str => (isString(str) ? str.trim() : '')
