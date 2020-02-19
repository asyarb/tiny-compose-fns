/**
 * Shallowly merges objects together. Shared keys from sources will overwrite keys in target. Source priority are applied from right to left.
 *
 * @param targetObject - Destination object.
 * @param sourceObjects - Source objects.
 *
 * @returns The merged object.
 */
export const merge = (
  targetObject: object | string,
  ...sourceObjects: object[] | string[]
) => {
  const target = Object.assign({}, targetObject)

  return Object.assign(target, ...sourceObjects)
}
