import { isFunction } from '../utils/isFunction'

type Callback<Item> = (currentValue: Item, index: number, array: Item[]) => void

/**
 * Execute a provided function once for each array element.
 *
 * @param callback - Function that is invoked per element.
 * @param data - The array to process.
 *
 * @returns undefined.
 */
export const forEach = <T>(callback: Callback<T>, data: T[]) => {
  if (!isFunction(callback)) return
  if (!Array.isArray(data)) return

  data.forEach(callback)
}
