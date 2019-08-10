/**
 * Get the string tag of a value.
 * @private
 *
 * @param {*} val
 */
export const getTag = val => toString.call(val)

/**
 * Returns true if given value is an instance of Map or Set.
 * @private
 *
 * @param {Object} obj
 */
export const isMapOrSet = obj => {
  const tag = getTag(obj)
  return tag === '[object Set]' || tag === '[object Map]'
}
