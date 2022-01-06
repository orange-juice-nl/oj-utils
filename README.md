# various utils
Various utilities
## Usage

### import
```typescript
import { getTransitionDuration } from "oj-utils"
```

### getTransitionDuration
```typescript
const duration = getTransitionDuration(element, deep)

```

### getOuterHeight
```typescript
const height = getOuterHeight(element)
```

### getOuterWidth
```typescript
const width = getOuterWidth(element)
```

### getOffsetsOnPage
```typescript
const offset = getOffsetsOnPage(element)
```

### withinViewport
```typescript
const visible = withinViewport(element, completely)
```

### childOf
```typescript
const childExistsInContainerElement = childOf(container, child)
```

### getEventProps
```typescript
const handle = e => {
  const { clientX, clientY } = getEventProps(e) // normalized
}
window.addEventListener("mousemove", handle)
window.addEventListener("touchmove", handle)
```

### getOffsetX
```typescript
window.addEventListener("mousemove", e => {
  const elementOffsetX = getOffsetX(e)
})
```

### getOffsetY
```typescript
window.addEventListener("mousemove", e => {
  const elementOffsetY = getOffsetY(e)
})
```

### appendDivTo
```typescript
const newChildDiv = appendDivTo(element)
```

### sanitizeHTML
```typescript
const text = sanitizeHTML(text)
```

### jsonToB64
```typescript
const b64 = jsonToB64(obj)
```

### jsonFromB64
```typescript
const obj = jsonFromB64(b64)
```

### loadScript
```typescript
await loadScript(url) // appends script tag to body
```

### getRootElements
data-loaded="true" will be set on all returned elements.
elements with this attribute wont be selected the next time.

```typescript
const elements = getRootElements(selector)
```

### getRootData
selects the first input field within the element and returns the value as json

```typescript
const data = getRootData(element)
```

### mounter
uses getRootElements and getRootData

```typescript
mounter("[data-dialog]", (root, data) => {
  new Dialog(root, data)
})
```