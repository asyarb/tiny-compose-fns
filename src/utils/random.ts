/**
 * Generates a random number between the provided bounds, inclusively.
 *
 * @param lower - The lower bound.
 * @param upper - The upper bound.
 *
 * @returns A random number between the provided bounds.
 */
export const random = (lower: number, upper: number) => {
  if (!upper || typeof upper === 'boolean') {
    upper = lower
    lower = 0
  }

  let randomic = Math.random() * upper
  return randomic >= lower ? randomic : random(lower, upper)
}
