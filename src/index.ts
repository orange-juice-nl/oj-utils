export const getTransitionDuration = (element: HTMLElement, deep = false) => {
  const duration = Math.max(...(window.getComputedStyle(element).transitionDuration || "0").split(",").map(x => parseFloat(x)))
  const delay = Math.max(...(window.getComputedStyle(element).transitionDelay || "0").split(",").map(x => parseFloat(x)))
  let totalTime = (duration + delay) * 1000
  if (deep)
    totalTime += Array.from(element.children || []).reduce((sum, x) => sum += getTransitionDuration(x as HTMLElement, deep), 0)
  return totalTime
}

export const getOuterHeight = (element: HTMLElement) => {
  const styles = getComputedStyle(element)
  return parseFloat(styles.height || "0")
    + parseFloat(styles.marginTop || "0")
    + parseFloat(styles.marginBottom || "0")
    + parseFloat(styles.paddingTop || "0")
    + parseFloat(styles.paddingBottom || "0")
}

export const getOuterWidth = (element: HTMLElement) => {
  const styles = getComputedStyle(element)
  return parseFloat(styles.width || "0")
    + parseFloat(styles.marginLeft || "0")
    + parseFloat(styles.marginRight || "0")
    + parseFloat(styles.paddingLeft || "0")
    + parseFloat(styles.paddingRight || "0")
}

export const getOffsetsOnPage = (element: HTMLElement) => {
  let _x = 0
  let _y = 0
  while (element && !isNaN(element.offsetLeft) && !isNaN(element.offsetTop)) {
    _x += element.offsetLeft - element.scrollLeft
    _y += element.offsetTop - element.scrollTop
    element = element.offsetParent as HTMLElement
  }
  return { top: _y, left: _x }
}

export const withinViewport = (element: Element, completely = true) => {
  const rect = element.getBoundingClientRect()
  const windowHeight = window.innerHeight || document.documentElement.clientHeight
  const windowWidth = window.innerWidth || document.documentElement.clientWidth

  const topVisible = rect.top > 0 && rect.top < windowHeight
  const bottomVisible = rect.bottom < windowHeight && rect.bottom > 0

  const leftVisible = rect.left > 0 && rect.left < windowWidth
  const rightVisible = rect.right < windowWidth && rect.right > 0

  return completely
    ? (topVisible && bottomVisible && leftVisible && rightVisible)
    : ((topVisible || bottomVisible) && (leftVisible || rightVisible))
}

export const childOf = (container: HTMLElement, child: HTMLElement) => {
  let el = child
  if (!el)
    return false

  while (el !== container) {
    if (!el.parentNode)
      return false
    el = el.parentNode as HTMLElement
  }

  return true
}

export const getEventProps = (e: any) => {
  if (e.targetTouches && e.targetTouches[0])
    return e.targetTouches[0]

  if (e.changedTouches && e.changedTouches[0])
    return e.changedTouches[0]

  return e
}

export const getOffsetX = (e: any) => {
  let x = 0
  let elem = e.target
  while (elem) {
    x += parseInt(elem.offsetLeft)
    elem = elem.offsetParent
  }
  return getEventProps(e).pageX - x
}

export const getOffsetY = (e: any) => {
  let y = 0
  let elem = e.target
  while (elem) {
    y += parseInt(elem.offsetTop)
    elem = elem.offsetParent
  }
  return getEventProps(e).pageY - y
}

export const sanitizeHTML = (html: string) => {
  const ta = document.createElement("textarea")
  ta.innerHTML = html
  return (ta.value || html)
    .replace(/NS\d+:href/gi, 'xlink:href')
    .replace(/[\u00A0-\u9999\&]/gm, i => `&#${i.charCodeAt(0)};`)
}

export const getRootElements = <T extends HTMLElement>(selector: string) =>
  (Array.from(document.querySelectorAll(selector)) as T[])
    .filter(x => x.getAttribute("data-loaded") !== "true")
    .map(x => {
      x.setAttribute("data-loaded", "true")
      return x
    })

export const jsonToB64 = (json: any) =>
  btoa(JSON.stringify(json))

export const jsonFromB64 = (b64: string) =>
  JSON.parse(atob(b64))

export const getRootData = <T>(x: HTMLElement) => {
  const input = x.querySelector("input")
  let data: T
  try {
    data = input ? JSON.parse(input.value) : null
  } catch (err) {
    data = null
  }
  return data
}

export const mounter = <T extends {}>(selector: string, cb: (root: HTMLElement, data: T | null) => void) =>
  getRootElements(selector)
    .forEach(x =>
      cb(x, getRootData(x)))

export const loadScript = (url: string, target = document.body) =>
  new Promise<Event>((res, rej) => {
    const tag = document.createElement("script")
    tag.onload = e => res(e)
    tag.onerror = e => rej(e)
    tag.src = url
    target.appendChild(tag)
  })

export const appendDivTo = (target = document.body) => {
  const root = document.createElement("div")
  target.appendChild(root)
  return root
}