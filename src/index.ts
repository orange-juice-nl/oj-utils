export const randomInt = (min: number = 0, max: number = 9999) =>
  Math.floor(Math.random() * (max - min)) + min

export const randomDec = (min: number = 0, max: number = 9999) =>
  (Math.random() * (max - min) + min)

export const randomList = <T>(list: T[]) =>
  list[randomInt(0, list.length)]

export const mapRange = (value: number, source: number[], target: number[]) =>
  target[0] + (value - source[0]) * (target[1] - target[0]) / (source[1] - source[0])

export const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max)

export const cleanString = (...x: any[]): string =>
  x
    .filter(x => typeof x === "string")
    .map(x => x.trim())
    .join(" ")

export const pause = async (ms: number) =>
  new Promise<void>((resolve, reject) => {
    const timeout = setTimeout(resolve, ms)
    return () => {
      clearTimeout(timeout)
      reject("pause canceled")
    }
  })

export const UUID = () => {
  let d = Date.now()
  if (window.performance && typeof window.performance.now === "function") d += performance.now()
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (d + Math.random() * 16) % 16 | 0
    d = Math.floor(d / 16)
    return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16)
  })
}

export const mmToPx = (mm: number, dpi: number = 200) =>
  (mm * dpi) / 25.4

export const pxToMm = (px: number, dpi: number = 200) =>
  (px / dpi) * 25.4

export const getDpi = (px: number, mm: number) =>
  px / mm * 25.4

export const pipe = <T>(value: T) =>
({
  map: <R>(fn: (value: T) => R) => pipe(fn(value)),
  value
})

export const uniqueArray = <T>(arr: T[]) =>
  Array.from(new Set(arr))

export const generateHashFromString = (str: string) =>
  str.split("").reduce((s, x) => (((s << 5) - s) + x.charCodeAt(0)) | 0, 0)

export type FindCallbackObj<T> = (item: T[Extract<keyof T, string>], key: string, obj: T) => boolean | undefined

export type MapCallbackObj<T, R> = (item: T[Extract<keyof T, string>], key: string, obj: T) => R

export type ReduceCallbackObj<T, R> = (result: R, item: T[Extract<keyof T, string>], key: string, obj: T) => R

export type KeysOf<T, V> = { [K in keyof T]: V }

export type ValueOf<T> = T[Extract<keyof T, string>]

export const findObjKey = <T>(obj: T, cb: FindCallbackObj<T>) => {
  for (const k in obj)
    if (cb(obj[k], k, obj))
      return k
}

export const filterObj = <T>(obj: T, cb: FindCallbackObj<T>) => {
  const result: Partial<T> = {}
  for (const k in obj)
    if (cb(obj[k], k, obj))
      result[k] = obj[k]
  return result
}

export const reduceObj = <T, R>(obj: T, cb: ReduceCallbackObj<T, R>, result: R): R => {
  for (const k in obj)
    result = cb(result, obj[k], k, obj)
  return result
}

export const mapObj = <T, R>(obj: T, cb: MapCallbackObj<T, R>) => {
  const result = {} as KeysOf<T, R>
  for (const k in obj)
    result[k] = cb(obj[k], k, obj)
  return result
}

export const groupObj = <T>(obj: T, key: string, ref = "$key") => {
  const result: { [k: string]: (T[keyof T] & { [k: typeof ref]: string })[] } = {}
  for (const k in obj) {
    const gr = obj[k][key]
    result[gr] ??= []
    result[gr].push({ [ref]: k, ...obj[k] })
  }
  return result
}

export const groupArr = <T>(arr: T[], key: string, ref = "$key") => {
  const result: { [k: string]: (T & { [k: typeof ref]: number })[] } = {}
  for (let i = 0; i < arr.length; i++) {
    const gr = arr[i][key]
    result[gr] ??= []
    result[gr].push({ [ref]: i, ...arr[i] })
  }
  return result
}

export const objToArr = <T>(obj: T, ref = "$key") =>
  reduceObj<T, (T[keyof T] & { [k: typeof ref]: string })[]>(obj, (r, x, k) => (r as any[]).concat({ ...x, [ref]: k }), [])

export const arrToObj = <T>(arr: T[], key: string = "$key"): { [key: string]: T } =>
  arr.reduce((r, x) => {
    const copy = { ...x }
    delete copy[key]
    r[x[key]] = copy
    return r
  }, {})

export const repeatMap = <T = number>(times: number, fn?: (i: number) => T): T[] => {
  const result: T[] = []
  for (let i = 0; i < times; i++)
    result[i] = fn?.(i) ?? i as any
  return result
}

export const increment = () => {
  let i = 0
  return () =>
    i++
}

export const diff = (cb: () => number, reset = false) => {
  let last = cb()
  return () => {
    const curr = cb()
    const d = curr - last
    if (reset)
      last = curr
    return d
  }
}

export const exec = <T extends (...args: any[]) => unknown>(fn: T, ...args: Parameters<T>): ReturnType<T> =>
  typeof fn === "function"
    ? fn.apply(this, args)
    : undefined

export const debounce = <T extends (...args: any[]) => R, R>(threshold: number, fn: T, head = false, tail = true) => {
  let t: any
  let c: R
  return ((...args: Parameters<T>) => {
    if (t === undefined && head)
      c = fn(...args)

    clearTimeout(t)
    t = setTimeout(() => {
      if (tail)
        c = fn(...args)
      t = undefined
    }, threshold)

    return c
  }) as T
}

export const throttle = <T extends (...args: any[]) => R, R>(threshold: number, fn: T, tail = false) => {
  let t: any
  let p: number
  let c: R
  return ((...args: Parameters<T>) => {
    clearTimeout(t)
    const now = Date.now()
    if (!p || now - p >= threshold) {
      p = now
      c = fn(...args)
    }
    else if (tail) {
      t = setTimeout(() => {
        c = fn(...args)
        t = undefined
      }, threshold)
    }

    return c
  }) as T
}

export const memoize = <T extends (...args: any[]) => unknown, H extends (...args: Parameters<T>) => string>(fn: T, hashFn?: H) => {
  const cache: Record<string, any> = {}

  return ((...args: Parameters<T>) => {
    const hash = hashFn?.(...args) ?? JSON.stringify(args)
    if (cache[hash] === undefined)
      cache[hash] = fn(...args) ?? null
    return cache[hash]
  }) as any as T
}

export const chunk = <T>(n: number, arr: T[]) => {
  const chunks: T[][] = []
  for (let i = 0; i < arr.length; i++) {
    const chunk = Math.floor(i / n)
    if (!chunks[chunk])
      chunks[chunk] = []
    chunks[chunk].push(arr[i])
  }
  return chunks
}

export const createToggle = () => {
  let value = false

  return {
    get: () => value,
    on: () => value = true,
    off: () => value = false,
    toggle: () => value = !value,
  }
}

export const removeIfExists = <T>(arr: T[], cb: (x: T, i: number, obj: T[]) => boolean) => {
  const i = arr.findIndex(cb)
  if (i !== -1)
    arr.splice(i, 1)
  return arr
}

export const clone = <T>(obj: T): T =>
  JSON.parse(JSON.stringify(obj))

export const formatSize = (bytes: number) => {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"]
  if (bytes == 0)
    return "0 Byte"
  const i = Math.floor(Math.floor(Math.log(bytes) / Math.log(1024)))
  let size = (bytes / Math.pow(1024, i))
  size = Math.round(size * 100) / 100
  return size + sizes[i]
}

export const formatPrice = (price: number, decimal = true, format: {
  pre?: string,
  dot?: string,
  post?: string,
} = {}) => {
  const [n, m] = `${Math.round(price * 100) / 100}`.split(".")
  const { pre, dot, post } = Object.assign({ pre: "€ ", dot: ",", post: "" }, format)
  const cents = `${m ?? 0}`.padEnd(2, "0")
  return decimal ? `${pre}${n}${dot}${cents}${post}` : `${pre}${Math.round(price)}${post}`
}

export const isIE = memoize(() =>
  (/MSIE (\d+\.\d+);/.test(navigator.userAgent) || navigator.userAgent.indexOf("Trident/") > -1), () => navigator.userAgent)

export const createImage = (src: string) =>
  new Promise<HTMLImageElement>((res, rej) => {
    const img = new Image()
    img.crossOrigin = "Anonymous"
    img.onload = () => res(img)
    img.onerror = (err) => rej(err)
    img.src = src
  })

export const getImageTypeFromB64 = (source: string) => {
  const match = source.match(/(image\/.*)?;/)
  return (match && match[1]) ? match[1] : "image/png"
}

export const base64toBlob = (src: string) => {
  const base64Data = src.replace(/^data:image\/(.*?);base64,/, "")
  const contentType = getImageTypeFromB64(src)
  const sliceSize = 1024
  const byteCharacters = atob(base64Data)
  const bytesLength = byteCharacters.length
  const slicesCount = Math.ceil(bytesLength / sliceSize)
  const byteArrays = new Array(slicesCount)

  for (let i = 0; i < slicesCount; ++i) {
    const begin = i * sliceSize
    const end = Math.min(begin + sliceSize, bytesLength)
    const bytes = new Array(end - begin)
    for (let offset = begin, i = 0; offset < end; ++i, ++offset)
      bytes[i] = byteCharacters[offset].charCodeAt(0)
    byteArrays[i] = new Uint8Array(bytes)
  }
  return new Blob(byteArrays, { type: contentType })
}

export const fileToB64 = (file: File | Blob) =>
  new Promise<string>((res, rej) => {
    const reader = new FileReader()
    reader.onload = () => res(reader.result as string)
    reader.onerror = (err) => rej(err)
    reader.readAsDataURL(file)
  })

export const imageUrlToB64 = (url: string) =>
  fetch(url)
    .then(x => x.blob())
    .then(x => fileToB64(x))

export type DynamicValue<T> = T | (() => T)
export type DynamicObject<T> = { [Property in keyof T]: DynamicValue<T[Property]> }
export type DynamicValueType<T> = T extends () => unknown ? ReturnType<T> : T
export type DynamicObjectType<T> = { [Property in keyof T]: DynamicValueType<T[Property]> }

export const getDynamicVal = <T extends DynamicValue<unknown>>(x: T) =>
  typeof x === "function" ? x() : x as DynamicValueType<T>

export const getDynamicObj = <T extends DynamicObject<unknown>>(x: T) =>
  Object.fromEntries(Object.entries(x).map(([k, v]) => [k, getDynamicVal(v)])) as DynamicObjectType<T>