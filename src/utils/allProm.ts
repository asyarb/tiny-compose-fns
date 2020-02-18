/**
 * Resolve an iterable collection of promises to one promise.
 *
 * @param promises - Iterable set of promises to resolve.
 *
 * @returns A single Promise that resolves when all Promises have resolved or rejects with the reason of the first Promise that rejects.
 */
export const allProm = async <T>(arr: Promise<T>[]) =>
  Array.isArray(arr) ? await Promise.all(arr) : []
