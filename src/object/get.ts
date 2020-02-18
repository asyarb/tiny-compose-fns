/**
 * Safely gets the value at the specified path from an object.
 *
 * @param path - Path of the property to retrieve from `object`.
 * @param object - Object to retrieve from.
 * @param defaultValue - Optional fallback value for undefined paths.
 *
 * @returns The resolved value.
 */
export const get = <T>(
  path: string,
  object: { [key: string]: any },
  defaultValue?: T
) => {
  const splitPath = (path as string).split ? (path as string).split('.') : path

  for (let p = 0; p < splitPath.length; p++) {
    object = object ? object[path[p]] : undefined
  }

  return object === undefined ? defaultValue : object
}
