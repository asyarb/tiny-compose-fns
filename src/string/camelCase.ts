import { isString } from '../utils/isString'

/**
 * Camelcases the provided string.
 *
 * @param string - The string to camelCase.
 */
export const camelCase = (string: string) => {
  if (!isString(string) || string === '') return ''

  const listNames = string.split(/[\s,_-]+/)
  let objectName = ''

  for (let x = 0; x < listNames.length; x++) {
    let item = listNames[x]
    objectName += item[0].toUpperCase() + item.substring(1).toLowerCase()
  }

  return objectName[0].toLowerCase() + objectName.substring(1)
}
