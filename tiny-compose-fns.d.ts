export function allProm(promises: Promise[]): any[]

export function camelCase(string: string): string

export function castArray(value: any): [any]

export function chunk(size: number, array: any[]): any[]

export function compact(array: any[]): any[]

export function compose(data: any): any

export function concat(array: any[], values: any[]): any[]

export function entries(object: object): any[]

export function filter(
  callback: (currentElement: any, index: number, array: any[]) => any,
  array: any[]
): any[]

export function find(
  callback: (currElement: any, index: number, array: any[]) => boolean,
  array: any[]
): any

export function first(array: any[]): any

export function flat(array: any[]): any[]

export function flatDeep(array: any[]): any[]

export function flatDepth(depth: number, array: any[]): any[]

export function flatMap(
  callback: (currentElement: any, index: number, array: any[]) => any,
  array: any[]
): any[]

export function forEach(
  callback: (currentElement: any, index: number, array: any[]) => void,
  array: any[]
): void

export function fromEntries(entries: any[]): object

export function get(path: string, object: object, fallback: any): any

export function has(path: string, object: object): boolean

export function includes(value: any, array: any[]): boolean

export function indexOf(value: any, array: any[]): number

export function isArray(value: any): boolean

export function isEmpty(value: any): boolean

export function isFunction(value: any): boolean

export function isNull(value: any): boolean

export function isNumber(value: any): boolean

export function isPlainObject(value: any): boolean

export function isString(value: any): boolean

export function isUndefined(value: any): boolean

export function join(separator: string, array: string[] | number[]): string

export function keys(object: object): any[]

export function last(array: any[]): any

export function lastIndexOf(value: any, array: any[]): number

export function lowercase(string: string): string

export function map(
  callback: (currentValue: any, index: number, array: any[]) => any,
  data: any[]
): any[]

export function max(numbers: number[]): number | undefined

export function merge(target: object, ...sources: object[]): object

export function mergeDeep(target: object, source: object): object

export function min(numbers: number[]): number | undefined

export function noop(): undefined

export function pairsEq(pairs: any[], pairsTwo: any[]): boolean[]

export function propsEq(
  key: string,
  object: object,
  objectTwo: object
): boolean[]

export function reduce(
  callback: (
    accumulator: any,
    currentValue: any,
    index: number,
    array: any[]
  ) => any,
  initialValue: any,
  data: any[]
): any

export function replace(
  pattern: RegExp | string,
  replacement: string,
  source: string
): string

export function resolve(promise: Promise): any

export function reverse(array: any[]): any[]

export function sample(array: any[]): any

export function shuffle(array: any[]): any[]

export function size(object: any[] | object | Map | Set): number

export function slice(start: number, end: number, array: any[]): any[]

export function some(callback: (element: any) => boolean): boolean

export function sort(array: any[]): any[]

export function sortBy(keyOrFunction: any, array: any[]): any[]

export function splice(
  start: number,
  deleteCount: number,
  item: any,
  array: any[]
): any[]

export function split(delimiter: string, sourceStr: string): string

export function startCase(source: string): string

export function startsWith(startStr: string, checkStr: string): boolean

export function tail(array: any[]): any

export function take(amount: number, array: any[]): any[]

export function times(callback: (index: number) => any, numTimes: number): any[]

export function toArray(value: any): any[]

export function trim(string: string): string

export function uniq(array: any[]): any[]

export function uniqueId(prefix: string): number

export function upperFirst(string: string): string

export function uppercase(string: string): string

export function values(object: object): any[]

export function zip(arrOne: any[], arrTwo: any[]): any[]

export function zipWith(
  callback: (arrOneCurr: any, arrTwoCurr: any) => any,
  arrOne: any[],
  arrTwo: any[]
): any[]
