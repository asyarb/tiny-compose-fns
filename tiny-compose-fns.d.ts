/**
 * Resolve an iterable collection of promises to one promise.
 *
 * @param promises - Iterable set of promises to resolve.
 *
 * @returns A single Promise that resolves when all Promises have resolved or rejects with the reason of the first Promise that rejects.
 */
export function allProm<T>(promises: Promise<T>[]): T[]

/**
 * Camelcases the provided string.
 *
 * @param string - The string to camelCase.
 */
export function camelCase(string?: string): string

/**
 * Casts the provided value as an array if it's not one.
 *
 * @param value - The value to cast.
 *
 * @returns The cast array.
 */
export function castArray<T>(value?: T): T[]

/**
 * Creates an array of elements split into groups of the provided size.
 *
 * @param size - Length of each chunk.
 * @param array - The array to split.
 *
 * @returns An array containing chunked arrays. If array cannot be split evenly, the final chunk will be the remaining elements.
 */
export function chunk<T>(size?: number, array?: T[]): T[][]

/**
 * Creates an array with all falsey values removed.
 *
 * @param array - The array to compact.
 *
 * @returns The new array of filtered values.
 */
export function compact<T>(array?: T[]): T[]

/**
 * Performs right-to-left function composition. Composed function must be unary. The rightmost function can have any arity.
 *
 * @param data -
 *
 * @returns A composed function that performs the right-to-left operations specified.
 */
export function compose(...functions: any): (data?: any) => any

/**
 * Creates a new array concatenating the provided array with any additional arrays and/or values.
 *
 * @param array - The array to concatenate.
 * @param values - The values to concatenate.
 */
export function concat<T1, T2>(array?: T1[], values?: T2[]): T1 | T2[]

/**
 * Creates an array of enumerable string key-value pairs from the provided object.
 *
 * @param object - The object to convert.
 *
 * @reutnrs The array of key-value pairs.
 */
export function entries<T>(object?: object): T[]

/**
 * Creates a new array by including values that return true based on the provided callback.
 *
 * @param callback - The function invoked per element.
 * @param array - The array to iterate over.
 *
 * @returns The new filtered array.
 */
export function filter<T1, T2>(
  callback?: (currentElement?: T1, index?: number, array?: T1[]) => T2,
  array?: T1[]
): T2[]

/**
 * Finds the value of the first element in an array that satisfies the provided function.
 *
 * @param callback - Function invoked per element.
 * @param array - The array to iterate over.
 *
 * @returns The value or undefined if not found.
 */
export function find<T>(
  callback?: (currElement?: T, index?: number, array?: T[]) => boolean,
  array?: T[]
): T

/**
 * Gets the first element of an array.
 *
 * @param array - The array to query.
 *
 * @returns The first element of an array.
 */
export function first<T>(array?: T[]): T

/**
 * Creates a new array that is flattened a single level deep.
 *
 * @param array - The array to flatten.
 *
 * @returns A new array flattened by a single level.
 */
export function flat<T>(array?: T[]): T[]

/**
 * Creates a new array that is flattened recursively until it is one level deep.
 *
 * @param array - The array to flatten.
 *
 * @returns A new array flattened to a single level.
 */
export function flatDeep<T>(array?: T[]): T[]

/**
 * Creates a new array that is flattened recursively by a specified depth.
 *
 * @param depth - The number of levels to recursively flatten.
 * @param array - The array to flatten.
 *
 * @returns A new array flattened by the specified amount.
 */
export function flatDepth<T>(depth?: number, array?: T[]): T[]

/**
 * Creates a new array by running map() over it, then flattenining the result into a new array. Is more efficient than running map() then flat() separately.
 *
 * @param callback - Function that is invoked per element.
 * @param array - The array to process.
 *
 * @return A new array containing the mapped and flattened values.
 */
export function flatMap<T1, T2>(
  callback?: (currentElement?: T1, index?: number, array?: T1[]) => T2,
  array?: T1[]
): T2[]

/**
 * Execute a provided function once for each array element.
 *
 * @param callback - Function that is invoked per element.
 * @param array - The array to process.
 *
 * @returns undefined.
 */
export function forEach<T>(
  callback?: (currentElement?: T, index?: number, array?: T[]) => void,
  array?: T[]
): void

/**
 * Transforms a list of key-value pairs into an object.
 *
 * @param entries - Key-value pairs to process.
 *
 * @returns A new object whose properties are given by the entries of the array.
 */
export function fromEntries<T>(entries?: T[]): object

/**
 * Safely gets the value at the specified path from an object.
 *
 * @param path - Path of the property to retrieve.
 * @param object - Object to query.
 * @param fallback - Optional value for undefined paths.
 *
 * @returns The resolved value.
 */
export function get<T1, T2>(
  path?: string,
  object?: object,
  fallback?: T1
): T2 | T2 | undefined

/**
 * Checks if path is a property of the provided object.
 *
 * @param path - The path to check.
 * @param object - Object to query.
 *
 * @returns true if path exists, false otherwise.
 */
export function has(path?: string, object?: object): boolean

/**
 * Determines whether an array includes a certain value among its values.
 *
 * @param value - The value to check for.
 * @param array - The array to check.
 *
 * @returns true if value is in array, false otherwise.
 */
export function includes<T>(value?: T, array?: T[]): boolean

/**
 * Returns the first index at which a given value can be found in an array.
 *
 * @param value - Value to look for.
 * @param array - Array to check.
 *
 * @returns The first index of the element, or -1 otherwise.
 */
export function indexOf<T>(value?: T, array?: T[]): number

/**
 * Determines whether the passed value is an Array.
 *
 * @param value - Value to check.
 *
 * @returns true if value is an Array, false otherwise.
 */
export function isArray<T>(value?: T): boolean

/**
 * Determines whether the passed value is an empty object, array, map, or set.
 *
 * @param value - The collection to check.
 *
 * @returns true if the provided collection is empty, false otherwise.
 */
export function isEmpty<T>(value?: T): boolean

/**
 * Determines whether the passed value is a function.
 *
 * @param value - The value to check
 *
 * @returns true if value is a function, false otherwise.
 */
export function isFunction<T>(value?: T): boolean

/**
 * Determines whether the passed value is null.
 *
 * @param value - The value to check.
 *
 * @returns true if value is null, false otherwise.
 */
export function isNull<T>(value?: T): boolean

/**
 * Determines whether the passed value is a number.
 *
 * @param value - The value to check.
 *
 * @returns true if value is a number, false otherwise.
 */
export function isNumber<T>(value?: T): boolean

/**
 * Determines whether the passed object is a plain object.
 *
 * @param value - The value to check.
 *
 * @returns true if value is a plain object, false otherwise.
 */
export function isPlainObject<T>(value?: T): boolean

/**
 * Determines whether the passed object is a string.
 *
 * @param value - The value to check.
 *
 * @returns true if value is a string, false otherwise.
 */
export function isString<T>(value?: T): boolean

/**
 * Determines whether the passed object is undefined.
 *
 * @param value - The value to check.
 *
 * @returns true if value is undefined, false otherwise.
 */
export function isUndefined<T>(value?: T): boolean

/**
 * Converts elements in the provided array into a string separated by separator.
 *
 * @param separator - The element separator.
 * @param array - The array to convert.
 *
 * @returns The joined string.
 */
export function join(separator?: string, array?: string[] | number[]): string

/**
 * Creates an array of the own enumerable property names of the provided object.
 *
 * @param object - The object whose keys will be used.
 *
 * @returns An array of property names.
 */
export function keys<T>(object?: object): T[]

/**
 * Gets the last element of an array.
 *
 * @param array - The array to query.
 *
 * @returns The last element of the array.
 */
export function last<T>(array?: T[]): T

/**
 * Returns the last index of the provided value in an array.
 *
 * @param value - The value to search for.
 * @param array - The array to search.
 *
 * @returns The index of the matched value, else -1.
 */
export function lastIndexOf<T>(value?: T, array?: T[]): number

/**
 * Converts a string to lowercase.
 *
 * @param string - The string to convert.
 *
 * @returns A lowercased copy of the string.
 */
export function lowercase(string?: string): string

/**
 * Creates a new array by invoking the provided callback on every element of an array.
 *
 * @param callback - The function to run per element.
 * @param data - The array to process.
 *
 * @returns The new mapped array.
 */
export function map<T1, T2>(
  callback?: (currentValue: T1, index: number, array: T1[]) => T2,
  data?: T1[]
): T2[]

/**
 * Returns the maximal value from an array.
 *
 * @param numbers - The array to process.
 *
 * @returns The maximum value or undefined if array is falsey.
 */
export function max(numbers?: number[]): number | undefined

/**
 * Shallowly merges objects together. Shared keys from sources will overwrite keys in target. Source priority are applied from right to left.
 *
 * @param target - Destination object.
 * @param sources - Source objects.
 *
 * @returns The merged object.
 */
export function merge(target?: object, ...sources: object[]): object

/**
 * Recursively merges two objects together. Shared keys from source will overwrite keys in target.
 *
 * @param target - Destination Object
 * @param source - Source object.
 *
 * @returns The merged object.
 */
export function mergeDeep(target?: object, source?: object): object

/**
 * Returns the minimal value from an array.
 *
 * @param numbers - The array to process.
 *
 * @returns The minimum value or undefined if array is falsey.
 */
export function min(numbers?: number[]): number | undefined

/**
 * Returns undefined.
 */
export function noop(): undefined

/**
 * Returns an array containing boolean values of whether a given set of arrays have strict equality pairs.
 *
 * @param pairs - The first set of pairs.
 * @param pairsTwo - The second set of pairs
 *
 * @returns An array containing the boolean values.
 */
export function pairsEq<T>(pairs?: T[], pairsTwo?: T[]): boolean[]

/**
 * Checks if the properties of two objects are equal.
 *
 * @param  key - Property to check.
 * @param  object - Object to check.
 * @param  objectTwo - Second object to check.
 *
 * @returns true if the value at the specified key for both objects are equal, false otherwise.
 */
export function propsEq(
  key?: string,
  object?: object,
  objectTwo?: object
): boolean[]

/**
 * Executes a reducer function on each element of an array, resulting in a single output value.
 *
 * @param callback - Reducer function run on each element.
 * @param initialValue - Value to use as the accumulator.
 * @param data - Array to reduce.
 *
 * @returns Result of the reduction.
 */
export function reduce<T1, T2>(
  callback?: (
    accumulator: T1,
    currentValue: T2,
    index: number,
    array: T2[]
  ) => any,
  initialValue?: T1,
  data?: T2[]
): T1

/**
 * Replaces matched patterns in a string.
 *
 * @param pattern - RegExp or string to match.
 * @param replacement - String to replace matched patterns with.
 * @param source - String to modify.
 *
 * @returns A new modified string.
 */
export function replace(
  pattern?: RegExp | string,
  replacement?: string,
  source?: string
): string

/**
 * Returns a Promise that is resolved with the given value.
 *
 * @param promise - Value to be resolved.
 *
 * @returns A Promise that is resolved with the given value.
 */
export function resolve<T>(promise?: Promise<T>): T

/**
 * Creates an array that is the reversed content of the provided array.
 *
 * @param array - The array to reverse.
 *
 * @returns A new array containing the reversed values.
 */
export function reverse<T>(array?: T[]): T[]

/**
 * Gets a single random element from an array.
 *
 * @param array - The array to pull an element from.
 *
 * @returns The random element.
 */
export function sample<T>(array?: T[]): T

/**
 * Creates an array that is the shuffled content of the provided array.
 *
 * @param array - The array to shuffle.
 *
 * @returns A new array containing the shuffled contents.
 */
export function shuffle<T>(array?: T[]): T[]

/**
 * Gets the size of an iterable collection. Can be an array-like, object, Map, Set, etc.
 *
 * @param object - The collection to check the size of.
 *
 * @returns The collection size.
 */
export function size<T, K>(object?: T[] | object | Map<K, T> | Set<T>): number

/**
 * Creates a slice of an array from a specified start and end, exclusively.
 *
 * @param start - Start position.
 * @param end - End position.
 * @param array - The array to slice.
 *
 * @returns A new array containing the sliced contents.
 */
export function slice<T>(start?: number, end?: number, array?: T[]): T[]

/**
 * Checks if the provided callback returns truthy for any element of an array.
 *
 * @param callback - Function to run per element.
 * @param array - Array to iterate over.
 *
 * @returns true if any element passes the function condition, false otherwise.
 */
export function some<T>(
  callback?: (element?: T) => boolean,
  array?: T[]
): boolean

/**
 * Sorts elements of an array. The default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
 *
 * @param array - The array to sort.
 *
 * @returns A new array containing the sorted contents.
 */
export function sort<T>(array: T[]): T[]

/**
 * Sorts an array by the provided callback function.
 *
 * @param fn - Callback function to sort by.
 * @param array - The array to sort.
 *
 * @return A new array containing the sorted contents.
 */
export function sortWith<T>(fn: () => 1 | -1 | 0, array: T[]): T[]

/**
 * Sorts an array of objects by a provided key in ascending order.
 *
 * @param key - Object key to sort by.
 * @param array - The array to sort.
 *
 * @returns A new array containing the sorted contents.
 */
export function sortBy<T>(key: string, array?: T[]): T[]

/**
 * Sorts an array of objects by a provided key in descending order.
 *
 * @param key - Object key to sort by.
 * @param array - The array to sort.
 *
 * @returns A new array containing the sorted contents.
 */
export function sortByDesc<T>(key: string, array: T[]): T[]

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
export function splice<T>(
  start: number,
  deleteCount: number,
  item: T,
  array: T[]
): T[]

/**
 * Splits a string by the provided `delimiter`.
 *
 * @param delimiter - The separator pattern to split by.
 * @param sourceStr - The string to split.
 *
 * @returns An array containing the string segments.
 */
export function split(delimiter?: string, sourceStr?: string): string

/**
 * Start Cases the provided string.
 *
 * @param source - The string to Start Case.
 *
 * @returns The Start Cased string.
 */
export function startCase(source?: string): string

/**
 * Determines whether a string begins with the specified characters.
 *
 * @param startStr - The specified characters to check for.
 * @param string - The string to check.
 *
 * @returns `true` if `startStr` is at the beginning of the provided string, `false` otherwise.
 */
export function startsWith(startStr?: string, string?: string): boolean

/**
 * Creates an array containing all but the first element of an array.
 *
 * @param array - The array to get the tail of.
 *
 * @returns A new array containing the tail elements.
 */
export function tail<T>(array?: T[]): T[]

/**
 * Creates a slice of an array with `amount` elements taken from the start.
 *
 * @param amount - The number of elements to take.
 * @param array - The array to query.
 *
 * @returns A new array containing the slice of `array`.
 */
export function take<T>(amount?: number, array?: T[]): T[]

/**
 * Invokes the specified `callback` `numTimes`.
 *
 * @param callback - The callback to invoke. Is invoked with the current iteration (`index`)
 * @param numTimes - The number of times to invoke the specified `callback`
 *
 * @returns The array of results containing the return values of `callback`.
 */
export function times<T>(
  callback?: (index?: number) => T,
  numTimes?: number
): T[]

/**
 * Converts `value` to an array.
 *
 * @param value - The value to convert.
 *
 * @returns The converted array.
 */
export function toArray<T>(value?: T): T[]

/**
 * Removes leading and trailing whitespace from `string`.
 *
 * @param string - The string to trim.
 *
 * @returns A new trimmed string.
 */
export function trim(string?: string): string

/**
 * Removes duplicates from `array`.
 *
 * @param array - The array to remove duplicates from.
 *
 * @returns The new duplicate free array.
 */
export function uniq<T>(array?: T[]): T[]

/**
 * Generates a unique ID. If `prefix` is given, the generated ID is appended to it.
 *
 * @param prefix - The value to prefix with.
 *
 * @returns The unique ID.
 */
export function uniqueId(prefix?: string): number

/**
 * Uppercases the first character in the provided `string`.
 *
 * @param string - The string to uppercaseFirst.
 *
 * @returns A new string whose first character is Uppercased.
 */
export function upperFirst(string?: string): string

/**
 * UPPERCASES the provided string.
 *
 * @param string - The string to UPPERCASE.
 *
 * @returns A new string whose contents are UPPERCASED.
 */
export function uppercase(string?: string): string

/**
 * Returns an array containing the enumerable values of the provided `object`.
 *
 * @param object - The object to extract values from.
 *
 * @returns An array containing the values.
 */
export function values<T>(object?: object): T[]

/**
 * Creates an array of grouped elements. The first group contains the first elements of the two arrays, the second contains the second elements, and so on.
 *
 * @param arrOne - The first array.
 * @param arrTwo - The second array.
 *
 * @returns The new array of grouped elements.
 */
export function zip<T1, T2>(
  arrOne?: T1[],
  arrTwo?: T2[]
): Array<[T1 | undefined, T2 | undefined]>

/**
 * Creates an array of grouped elements based on the provided callback. The callback is invoked with the appropriate index values of each array for the current iteration.
 *
 * @param callback - The function to iterate over each zipped pair.
 * @param arrOne - The first array.
 * @param arrTwo - The second array.
 *
 * @returns The new array of grouped elements.
 */
export function zipWith<T1, T2>(
  callback?: (arrOneCurr?: T1, arrTwoCurr?: T2) => T1 | T2,
  arrOne?: T1[],
  arrTwo?: T2[]
): Array<[T1 | undefined, T2 | undefined]>
