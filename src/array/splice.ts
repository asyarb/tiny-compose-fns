/**
 * Creates an array by changing the contents of an array by removing or replacing existing elements and/or adding new elements.
 *
 * @param start - The index to start changing the array.
 * @param deleteCount - The number of elements in the array to remove from `start`
 * @param item - Elements to add to the array, beginning from `start`.
 * @param array - The array to splice.
 *
 * @returns A new array with the spliced contents.
 */
export const splice = <T>(
  start: number,
  deleteCount: number,
  item: T,
  array: T[]
) => {
  if (!Array.isArray(array)) return []

  const clonedArray = array.map(i => i)
  clonedArray.splice(start, deleteCount, item)

  return clonedArray
}
