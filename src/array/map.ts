import { isFunction } from '../utils/isFunction'

/**
 * Creates a new array by invoking the provided callback on every element of an array.
 *
 * @param callback - The function to run per element.
 * @param data - The array to process.
 *
 * @returns The new mapped array.
 */
export const map = <Item, MappedItem>(
  callback: (currentValue: Item, index: number, array: Item[]) => MappedItem,
  data: Item[]
) => {
  if (!isFunction(callback)) return data
  if (!Array.isArray(data)) return []

  return data.map(callback)
}
