import { isFunction } from '../utils/isFunction'

/**
 * Execute a provided function once for each array element.
 *
 * @param callback - Function that is invoked per element.
 * @param data - The array to process.
 *
 * @returns undefined.
 */
export const forEach = <T>(
  callback: (currentValue: T, index: number, array: T[]) => void,
  data: T[]
) => {
  if (!isFunction(callback)) return
  if (!Array.isArray(data)) return

  data.forEach(callback)
}
