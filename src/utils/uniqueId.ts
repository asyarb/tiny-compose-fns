/**
 * Generates a unique ID. If `prefix` is given, the generated ID is appended to it.
 *
 * @param prefix - The string to optionally prefix with.
 *
 * @returns The unique ID.
 */
export const uniqueId = (prefix?: string) => {
  let num = 0

  return () => {
    prefix = prefix ? String(prefix) : ''
    num += 1
    return prefix + num
  }
}
