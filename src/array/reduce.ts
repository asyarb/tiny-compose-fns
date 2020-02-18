import { isFunction } from '../utils/isFunction'

type Reducer<Item, Accumulator> = (
  previousValue: Accumulator,
  currentValue: Item,
  currentIndex: number,
  array: Item[]
) => Accumulator

/**
 * Executes the provided reducer callback on each element of an array, resulting in a single output value.
 *
 * @param callback - Reducer callback run on each element.
 * @param initialValue - Value to use as the accumulator.
 * @param data - Array to reduce.
 *
 * @returns Result of the reduction.
 */
export const reduce = <Item, Accumulator>(
  callback: Reducer<Item, Accumulator>,
  initialValue: Accumulator,
  data: Item[]
) => {
  if (!isFunction(callback)) return initialValue
  if (!Array.isArray(data)) return initialValue

  return data.reduce(callback, initialValue)
}
