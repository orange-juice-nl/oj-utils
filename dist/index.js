"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appendDivTo = exports.loadScript = exports.mounter = exports.getRootData = exports.jsonFromB64 = exports.jsonToB64 = exports.getRootElements = exports.sanitizeHTML = exports.getOffsetY = exports.getOffsetX = exports.getEventProps = exports.childOf = exports.withinViewport = exports.getOffsetsOnPage = exports.getOuterWidth = exports.getOuterHeight = exports.getTransitionDuration = void 0;
var getTransitionDuration = function (element, deep) {
    if (deep === void 0) { deep = false; }
    var duration = Math.max.apply(Math, (window.getComputedStyle(element).transitionDuration || "0").split(",").map(function (x) { return parseFloat(x); }));
    var delay = Math.max.apply(Math, (window.getComputedStyle(element).transitionDelay || "0").split(",").map(function (x) { return parseFloat(x); }));
    var totalTime = (duration + delay) * 1000;
    if (deep)
        totalTime += Array.from(element.children || []).reduce(function (sum, x) { return sum += (0, exports.getTransitionDuration)(x, deep); }, 0);
    return totalTime;
};
exports.getTransitionDuration = getTransitionDuration;
var getOuterHeight = function (element) {
    var styles = getComputedStyle(element);
    return parseFloat(styles.height || "0")
        + parseFloat(styles.marginTop || "0")
        + parseFloat(styles.marginBottom || "0")
        + parseFloat(styles.paddingTop || "0")
        + parseFloat(styles.paddingBottom || "0");
};
exports.getOuterHeight = getOuterHeight;
var getOuterWidth = function (element) {
    var styles = getComputedStyle(element);
    return parseFloat(styles.width || "0")
        + parseFloat(styles.marginLeft || "0")
        + parseFloat(styles.marginRight || "0")
        + parseFloat(styles.paddingLeft || "0")
        + parseFloat(styles.paddingRight || "0");
};
exports.getOuterWidth = getOuterWidth;
var getOffsetsOnPage = function (element) {
    var _x = 0;
    var _y = 0;
    while (element && !isNaN(element.offsetLeft) && !isNaN(element.offsetTop)) {
        _x += element.offsetLeft - element.scrollLeft;
        _y += element.offsetTop - element.scrollTop;
        element = element.offsetParent;
    }
    return { top: _y, left: _x };
};
exports.getOffsetsOnPage = getOffsetsOnPage;
var withinViewport = function (element, completely) {
    if (completely === void 0) { completely = true; }
    var rect = element.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    var windowWidth = window.innerWidth || document.documentElement.clientWidth;
    var topVisible = rect.top > 0 && rect.top < windowHeight;
    var bottomVisible = rect.bottom < windowHeight && rect.bottom > 0;
    var leftVisible = rect.left > 0 && rect.left < windowWidth;
    var rightVisible = rect.right < windowWidth && rect.right > 0;
    return completely
        ? (topVisible && bottomVisible && leftVisible && rightVisible)
        : ((topVisible || bottomVisible) && (leftVisible || rightVisible));
};
exports.withinViewport = withinViewport;
var childOf = function (container, child) {
    var el = child;
    if (!el)
        return false;
    while (el !== container) {
        if (!el.parentNode)
            return false;
        el = el.parentNode;
    }
    return true;
};
exports.childOf = childOf;
var getEventProps = function (e) {
    if (e.targetTouches && e.targetTouches[0])
        return e.targetTouches[0];
    if (e.changedTouches && e.changedTouches[0])
        return e.changedTouches[0];
    return e;
};
exports.getEventProps = getEventProps;
var getOffsetX = function (e) {
    var x = 0;
    var elem = e.target;
    while (elem) {
        x += parseInt(elem.offsetLeft);
        elem = elem.offsetParent;
    }
    return (0, exports.getEventProps)(e).pageX - x;
};
exports.getOffsetX = getOffsetX;
var getOffsetY = function (e) {
    var y = 0;
    var elem = e.target;
    while (elem) {
        y += parseInt(elem.offsetTop);
        elem = elem.offsetParent;
    }
    return (0, exports.getEventProps)(e).pageY - y;
};
exports.getOffsetY = getOffsetY;
var sanitizeHTML = function (html) {
    var ta = document.createElement("textarea");
    ta.innerHTML = html;
    return (ta.value || html)
        .replace(/NS\d+:href/gi, 'xlink:href')
        .replace(/[\u00A0-\u9999\&]/gm, function (i) { return "&#".concat(i.charCodeAt(0), ";"); });
};
exports.sanitizeHTML = sanitizeHTML;
var getRootElements = function (selector) {
    return Array.from(document.querySelectorAll(selector))
        .filter(function (x) { return x.getAttribute("data-loaded") !== "true"; })
        .map(function (x) {
        x.setAttribute("data-loaded", "true");
        return x;
    });
};
exports.getRootElements = getRootElements;
var jsonToB64 = function (json) {
    return btoa(JSON.stringify(json));
};
exports.jsonToB64 = jsonToB64;
var jsonFromB64 = function (b64) {
    return JSON.parse(atob(b64));
};
exports.jsonFromB64 = jsonFromB64;
var getRootData = function (x) {
    var input = x.querySelector("input");
    var data;
    try {
        data = input ? JSON.parse(input.value) : null;
    }
    catch (err) {
        data = null;
    }
    return data;
};
exports.getRootData = getRootData;
var mounter = function (selector, cb) {
    return (0, exports.getRootElements)(selector)
        .forEach(function (x) {
        return cb(x, (0, exports.getRootData)(x));
    });
};
exports.mounter = mounter;
var loadScript = function (url, target) {
    if (target === void 0) { target = document.body; }
    return new Promise(function (res, rej) {
        var tag = document.createElement("script");
        tag.onload = function (e) { return res(e); };
        tag.onerror = function (e) { return rej(e); };
        tag.src = url;
        target.appendChild(tag);
    });
};
exports.loadScript = loadScript;
var appendDivTo = function (target) {
    if (target === void 0) { target = document.body; }
    var root = document.createElement("div");
    target.appendChild(root);
    return root;
};
exports.appendDivTo = appendDivTo;
