import { isPlainObject } from '../utils/isPlainObject'

type ArgumentOverloads = {
  <T>(value: { [key: string]: T }): T[]
  <T>(value: T): T[]
}

/**
 * Converts `value` to an array.
 *
 * @param value - The value to convert.
 *
 * @returns The converted array.
 */
export const toArray: ArgumentOverloads = <T>(value: T) => {
  if (!value) return []

  if (isPlainObject(value)) return Object.values(value)

  return Array.from(value as any)
}
