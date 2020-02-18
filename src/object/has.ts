import { get } from './get'

/**
 * Checks if path is a property of the provided object.
 *
 * @param path - The path to check.
 * @param object - Object to query.
 *
 * @returns true if path exists, false otherwise.
 */
export const has = (path: string, object: object) => Boolean(get(path, object))
