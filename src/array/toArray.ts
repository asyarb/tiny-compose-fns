import { isPlainObject } from '../utils/isPlainObject'
import { castArray } from './castArray'

type ObjectArgument<T> = { [key: string]: T }
type ArgumentOptions = {
  <T>(value: ObjectArgument<T>): T[]
  <T>(value: T): T[]
}

/**
 * Converts `value` to an array.
 *
 * @param value - The value to convert.
 *
 * @returns The converted array.
 */
export const toArray: ArgumentOptions = <T>(value: ObjectArgument<T> | T) => {
  if (isPlainObject(value)) return Object.values(value)

  if (!value) return []
  const test = value

  return castArray(test)
}
