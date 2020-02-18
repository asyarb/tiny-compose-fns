/**
 * Returns a Promise that is resolved with the given value.
 *
 * @param promise - Value to be resolved.
 *
 * @returns A Promise that is resolved with the given value.
 */
export const resolve = async <T>(value: T) => await Promise.resolve(value)
