# various utils
Various utilities
## Usage

### import
```typescript
import { randomInt } from "oj-utils"
```

### randomInt
```typescript
randomInt(min: number, max: number): number
```

### randomDec
```typescript
randomDec(min: number, max: number): number
```

### randomList
```typescript
randomList(list: T[]): T
```

### mapRange
```typescript
mapRange(value: number, source: [number, number], target: [number, number]): number
```

### clamp
```typescript
clamp(value: number, min: number, max: number): number
```

### cleanString
```typescript
cleanString(...parts: any[]): string
```

### UUID
```typescript
UUID(): string
```

### mmToPx
```typescript
mmToPx(mm: number, dpi: number): number
```

### pxToMm
```typescript
pxToMm(px: number, dpi: number): number
```

### getDpi
```typescript
getDpi(px: number, mm: number): number
```

### pipe
```typescript
const val = pipe(2)
  .map(x => x * 2)
  .map(x => x + "")
  .value // "4"
```

### uniqueArray
```typescript
uniqueArray(arr: T[]): T[]
```

### generateHashFromString
```typescript
generateHashFromString(str: string): number
```

### findObjKey
```typescript
const k = findObjKey({ a: 1, b: 2 }, x => x === 1) // a
```

### filterObj
```typescript
const obj = filterObj({ a: 1, b: 2, c: "" }, x => typeof x === "number") // { a: 1, b: 2 }
```

### reduceObj
```typescript
const values = reduceObj({ a: 1, b: 2 }, (s,x) => s + "," + x, "") // "1,2"
```

### mapObj
```typescript
const values = mapObj({ a: 1, b: 2 }, x => x * 2) // [2, 4]
```

### groupObj
```typescript
const obj = {
  a: { id: "id 0" },
  b: { id: "id 1" },
  c: { id: "id 0" }
}
const grouped = groupObj(obj, "id")
/* {
  "id 0": [
    { "$key": "a", "id": "id 0" },
    { "$key": "c", "id": "id 0" }
  ],
  "id 1": [
    { "$key": "b", "id": "id 1" }
  ]
} */
```

### groupArr
```typescript
const arr = [
  { id: "id 0" }, 
  { id: "id 1" }, 
  { id: "id 0" }
]
const grouped = groupArr(arr, "id")
/* {
  "id 0": [
    { "$key": 0, "id": "id 0" },
    { "$key": 2, "id": "id 0" }
  ],
  "id 1": [
    { "$key": 1, "id": "id 1" }
  ]
} */
```

### objToArr
```typescript
const obj = {
  a: { id: "id 0" },
  b: { id: "id 1" },
  c: { id: "id 0" }
}
const arr = objToArr(obj)
/* [
  { id: "id 0", $key: "a" }, 
  { id: "id 1", $key: "b" }, 
  { id: "id 0", $key: "c" }
] */
```

### arrToObj
```typescript
const arr = [
  { id: "id 0" }, 
  { id: "id 1" }, 
  { id: "id 0" }
] 
const obj = arrToObj(arr)
/* {
  a: { id: "id 0", ref: 0 },
  b: { id: "id 1", ref: 1 },
  c: { id: "id 0", ref: 2 }
}*/
```

### repeatMap
```typescript
const values = repeatMap(3) // [1,2,3]
const values = repeatMap(3, x => x * 2) // [2,4,6]
```

### increment
```typescript
const inc = increment()
inc() // 0
inc() // 1
inc() // 2
```

### diff
```typescript
const d = diff(() => performance.now())
setInterval(() => console.log(d()), 100) // 60.3, 111.8, 203.7, 313.5, 408.3, 501.5, ...

const d = diff(() => performance.now(), true)
setInterval(() => console.log(d()), 100) // 60.1, 106.5, 108.3, 94.59, 94.01, 107.7, ...
```

### exec
```typescript
const result = exec(someVar, arg1, arg2, etc) // if someVar is function, execute and return result. else return undefined
```

### debounce
```typescript
window.addEventListener("click", debounce(1000, e => {
  // api call or something, after 1000 ms of silence
}))
```

### throttle
```typescript
window.addEventListener("click", throttle(1000, e => {
  // api call or something, every 1000 th ms
}, false)) // if tail is true: call last time after 1000 ms of silence
```

### memoize
```typescript
const fn = memoize((a, b, c) => {
  const d = a + b + c // compute...
  return d
})

fn(1, 2, 3) // compute 6
fn(1, 2, 3) // reuse 6
fn(3, 3, 3) // compute 9

const fn = memoize((a, b, c) => {
  const d = a + b + c // compute...
  return d
}, (a, b) => `${a},${b}`)

fn(1, 2, 3) // compute 6
fn(1, 2, 10) // reuse 6, hash function uses only params a and b
fn(3, 3, 3) // compute 9

```

### chunk
```typescript
const chunks = chunk(4, [1,2,3,4,5,6,7,8,9])
/* [
  [1,2,3,4],
  [5,6,7,8],
  [9]
] */
```

### createToggle
```typescript
const t = createToggle()
t.toggle() // true
t.get() // false
t.on() // true
t.get() // true
t.off() // false
```

### removeIfExists
```typescript
const arr = [1,2,3,4]
removeIfExists(arr, x => x < 3) // mutates array, unlike filter
// arr is [1,2]
```

### clone
```typescript
clone(obj: T): T // uses json parse/stringify
```

### formatSize
```typescript
formatSize(bytes: number): string // n Bytes, KB, MB, GB, TB
```

### formatPrice
```typescript
formatPrice(12.446, true, { pre: "€ ", dot: "," }) // "€ 12,45"
```

### createImage
```typescript
createImage(src: string): Promise<HTMLImageElement>
```

### getImageTypeFromB64
```typescript
getImageTypeFromB64(source: string): string //  "image/png"  "image/jpeg"
```

### base64toBlob
```typescript
base64toBlob(src: string): Blob
```

### fileToB64
```typescript
fileToB64(file: File | Blob): Promise<string>
```

### imageUrlToB64
```typescript
imageUrlToB64(url: string): Promise<string>
```
