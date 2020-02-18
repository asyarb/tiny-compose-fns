export const fromEntries = <T>(arr: T) =>
  Array.isArray(arr) ? Object.fromEntries(arr) : {}
