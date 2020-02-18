/**
 * Invokes the specified `callback` the specfied number of times.
 *
 * @param callback - The callback to invoke. Is invoked with the current iteration (`index`)
 * @param numTimes - The number of times to invoke the specified `callback`
 *
 * @returns The array of results containing the return values of `callback`.
 */
export const times = <T>(callback: (idx: number) => T, numTimes: number) => {
  const arr = []

  for (let i = 0; i < numTimes; i++) {
    arr[i] = callback(i)
  }

  return arr
}
