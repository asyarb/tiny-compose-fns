import { isFunction } from '../utils/isFunction'

type Callback<Item> = (
  currentValue: Item,
  index: number,
  array: Item[]
) => boolean

/**
 * Creates a new array by including values that return true based on the provided callback.
 *
 * @param callback - The function invoked per element.
 * @param data - The array to iterate over.
 *
 * @returns The new filtered array.
 */
export const filter = <T>(callback: Callback<T>, data: T[]) => {
  if (!isFunction(callback)) return data
  if (!Array.isArray(data)) return []

  return data.filter(callback)
}
