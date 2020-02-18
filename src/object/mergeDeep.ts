import { isPlainObject } from '../utils/isPlainObject'

/**
 * Recursively merges two objects together. Shared keys from source will overwrite keys in target.
 *
 * @param targetObject - Destination Object
 * @param sourceObject - Source object.
 *
 * @returns The merged object.
 */
export const mergeDeep = (
  targetObject: { [key: string]: any },
  sourceObject: { [key: string]: any }
) => {
  let output = Object.assign({}, targetObject)

  if (isPlainObject(targetObject) && isPlainObject(sourceObject)) {
    Object.keys(sourceObject).forEach(key => {
      if (isPlainObject(sourceObject[key])) {
        if (!(key in targetObject))
          Object.assign(output, { [key]: sourceObject[key] })
        else output[key] = mergeDeep(targetObject[key], sourceObject[key])
      } else {
        Object.assign(output, { [key]: sourceObject[key] })
      }
    })
  }

  return output
}
