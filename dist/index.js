"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDynamicObj = exports.getDynamicVal = exports.imageUrlToB64 = exports.fileToB64 = exports.base64toBlob = exports.getImageTypeFromB64 = exports.createImage = exports.isIE = exports.formatPrice = exports.formatSize = exports.clone = exports.removeIfExists = exports.createToggle = exports.chunk = exports.memoize = exports.throttle = exports.debounce = exports.exec = exports.diff = exports.increment = exports.repeatMap = exports.arrToObj = exports.objToArr = exports.groupArr = exports.groupObj = exports.mapObj = exports.reduceObj = exports.filterObj = exports.findObjKey = exports.generateHashFromString = exports.uniqueArray = exports.pipe = exports.getDpi = exports.pxToMm = exports.mmToPx = exports.UUID = exports.pause = exports.cleanString = exports.clamp = exports.mapRange = exports.randomList = exports.randomDec = exports.randomInt = void 0;
var randomInt = function (min, max) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 9999; }
    return Math.floor(Math.random() * (max - min)) + min;
};
exports.randomInt = randomInt;
var randomDec = function (min, max) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 9999; }
    return (Math.random() * (max - min) + min);
};
exports.randomDec = randomDec;
var randomList = function (list) {
    return list[(0, exports.randomInt)(0, list.length)];
};
exports.randomList = randomList;
var mapRange = function (value, source, target) {
    return target[0] + (value - source[0]) * (target[1] - target[0]) / (source[1] - source[0]);
};
exports.mapRange = mapRange;
var clamp = function (value, min, max) {
    return Math.min(Math.max(value, min), max);
};
exports.clamp = clamp;
var cleanString = function () {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    return x
        .filter(function (x) { return typeof x === "string"; })
        .map(function (x) { return x.trim(); })
        .join(" ");
};
exports.cleanString = cleanString;
var pause = function (ms) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve, reject) {
                var timeout = setTimeout(resolve, ms);
                return function () {
                    clearTimeout(timeout);
                    reject("pause canceled");
                };
            })];
    });
}); };
exports.pause = pause;
var UUID = function () {
    var d = Date.now();
    if (window.performance && typeof window.performance.now === "function")
        d += performance.now();
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
    });
};
exports.UUID = UUID;
var mmToPx = function (mm, dpi) {
    if (dpi === void 0) { dpi = 200; }
    return (mm * dpi) / 25.4;
};
exports.mmToPx = mmToPx;
var pxToMm = function (px, dpi) {
    if (dpi === void 0) { dpi = 200; }
    return (px / dpi) * 25.4;
};
exports.pxToMm = pxToMm;
var getDpi = function (px, mm) {
    return px / mm * 25.4;
};
exports.getDpi = getDpi;
var pipe = function (value) {
    return ({
        map: function (fn) { return (0, exports.pipe)(fn(value)); },
        value: value
    });
};
exports.pipe = pipe;
var uniqueArray = function (arr) {
    return Array.from(new Set(arr));
};
exports.uniqueArray = uniqueArray;
var generateHashFromString = function (str) {
    return str.split("").reduce(function (s, x) { return (((s << 5) - s) + x.charCodeAt(0)) | 0; }, 0);
};
exports.generateHashFromString = generateHashFromString;
var findObjKey = function (obj, cb) {
    for (var k in obj)
        if (cb(obj[k], k, obj))
            return k;
};
exports.findObjKey = findObjKey;
var filterObj = function (obj, cb) {
    var result = {};
    for (var k in obj)
        if (cb(obj[k], k, obj))
            result[k] = obj[k];
    return result;
};
exports.filterObj = filterObj;
var reduceObj = function (obj, cb, result) {
    for (var k in obj)
        result = cb(result, obj[k], k, obj);
    return result;
};
exports.reduceObj = reduceObj;
var mapObj = function (obj, cb) {
    var result = {};
    for (var k in obj)
        result[k] = cb(obj[k], k, obj);
    return result;
};
exports.mapObj = mapObj;
var groupObj = function (obj, key, ref) {
    var _a;
    var _b;
    if (ref === void 0) { ref = "$key"; }
    var result = {};
    for (var k in obj) {
        var gr = obj[k][key];
        (_b = result[gr]) !== null && _b !== void 0 ? _b : (result[gr] = []);
        result[gr].push(__assign((_a = {}, _a[ref] = k, _a), obj[k]));
    }
    return result;
};
exports.groupObj = groupObj;
var groupArr = function (arr, key, ref) {
    var _a;
    var _b;
    if (ref === void 0) { ref = "$key"; }
    var result = {};
    for (var i = 0; i < arr.length; i++) {
        var gr = arr[i][key];
        (_b = result[gr]) !== null && _b !== void 0 ? _b : (result[gr] = []);
        result[gr].push(__assign((_a = {}, _a[ref] = i, _a), arr[i]));
    }
    return result;
};
exports.groupArr = groupArr;
var objToArr = function (obj, ref) {
    if (ref === void 0) { ref = "$key"; }
    return (0, exports.reduceObj)(obj, function (r, x, k) {
        var _a;
        return r.concat(__assign(__assign({}, x), (_a = {}, _a[ref] = k, _a)));
    }, []);
};
exports.objToArr = objToArr;
var arrToObj = function (arr, key) {
    if (key === void 0) { key = "$key"; }
    return arr.reduce(function (r, x) {
        var copy = __assign({}, x);
        delete copy[key];
        r[x[key]] = copy;
        return r;
    }, {});
};
exports.arrToObj = arrToObj;
var repeatMap = function (times, fn) {
    var _a;
    var result = [];
    for (var i = 0; i < times; i++)
        result[i] = (_a = fn === null || fn === void 0 ? void 0 : fn(i)) !== null && _a !== void 0 ? _a : i;
    return result;
};
exports.repeatMap = repeatMap;
var increment = function () {
    var i = 0;
    return function () {
        return i++;
    };
};
exports.increment = increment;
var diff = function (cb, reset) {
    if (reset === void 0) { reset = false; }
    var last = cb();
    return function () {
        var curr = cb();
        var d = curr - last;
        if (reset)
            last = curr;
        return d;
    };
};
exports.diff = diff;
var exec = function (fn) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return typeof fn === "function"
        ? fn.apply(_this, args)
        : undefined;
};
exports.exec = exec;
var debounce = function (threshold, fn, head, tail) {
    if (head === void 0) { head = false; }
    if (tail === void 0) { tail = true; }
    var t;
    var c;
    return (function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (t === undefined && head)
            c = fn.apply(void 0, args);
        clearTimeout(t);
        t = setTimeout(function () {
            if (tail)
                c = fn.apply(void 0, args);
            t = undefined;
        }, threshold);
        return c;
    });
};
exports.debounce = debounce;
var throttle = function (threshold, fn, tail) {
    if (tail === void 0) { tail = false; }
    var t;
    var p;
    var c;
    return (function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        clearTimeout(t);
        var now = Date.now();
        if (!p || now - p >= threshold) {
            p = now;
            c = fn.apply(void 0, args);
        }
        else if (tail) {
            t = setTimeout(function () {
                c = fn.apply(void 0, args);
                t = undefined;
            }, threshold);
        }
        return c;
    });
};
exports.throttle = throttle;
var memoize = function (fn, hashFn) {
    var cache = {};
    return (function () {
        var _a, _b;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var hash = (_a = hashFn === null || hashFn === void 0 ? void 0 : hashFn.apply(void 0, args)) !== null && _a !== void 0 ? _a : JSON.stringify(args);
        if (cache[hash] === undefined)
            cache[hash] = (_b = fn.apply(void 0, args)) !== null && _b !== void 0 ? _b : null;
        return cache[hash];
    });
};
exports.memoize = memoize;
var chunk = function (n, arr) {
    var chunks = [];
    for (var i = 0; i < arr.length; i++) {
        var chunk_1 = Math.floor(i / n);
        if (!chunks[chunk_1])
            chunks[chunk_1] = [];
        chunks[chunk_1].push(arr[i]);
    }
    return chunks;
};
exports.chunk = chunk;
var createToggle = function () {
    var value = false;
    return {
        get: function () { return value; },
        on: function () { return value = true; },
        off: function () { return value = false; },
        toggle: function () { return value = !value; },
    };
};
exports.createToggle = createToggle;
var removeIfExists = function (arr, cb) {
    var i = arr.findIndex(cb);
    if (i !== -1)
        arr.splice(i, 1);
    return arr;
};
exports.removeIfExists = removeIfExists;
var clone = function (obj) {
    return JSON.parse(JSON.stringify(obj));
};
exports.clone = clone;
var formatSize = function (bytes) {
    var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    if (bytes == 0)
        return "0 Byte";
    var i = Math.floor(Math.floor(Math.log(bytes) / Math.log(1024)));
    var size = (bytes / Math.pow(1024, i));
    size = Math.round(size * 100) / 100;
    return size + sizes[i];
};
exports.formatSize = formatSize;
var formatPrice = function (price, decimal, format) {
    if (decimal === void 0) { decimal = true; }
    if (format === void 0) { format = {}; }
    var _a = "".concat(Math.round(price * 100) / 100).split("."), n = _a[0], m = _a[1];
    var _b = Object.assign({ pre: "€ ", dot: ",", post: "" }, format), pre = _b.pre, dot = _b.dot, post = _b.post;
    var cents = "".concat(m !== null && m !== void 0 ? m : 0).padEnd(2, "0");
    return decimal ? "".concat(pre).concat(n).concat(dot).concat(cents).concat(post) : "".concat(pre).concat(Math.round(price)).concat(post);
};
exports.formatPrice = formatPrice;
exports.isIE = (0, exports.memoize)(function () {
    return (/MSIE (\d+\.\d+);/.test(navigator.userAgent) || navigator.userAgent.indexOf("Trident/") > -1);
}, function () { return navigator.userAgent; });
var createImage = function (src) {
    return new Promise(function (res, rej) {
        var img = new Image();
        img.crossOrigin = "Anonymous";
        img.onload = function () { return res(img); };
        img.onerror = function (err) { return rej(err); };
        img.src = src;
    });
};
exports.createImage = createImage;
var getImageTypeFromB64 = function (source) {
    var match = source.match(/(image\/.*)?;/);
    return (match && match[1]) ? match[1] : "image/png";
};
exports.getImageTypeFromB64 = getImageTypeFromB64;
var base64toBlob = function (src) {
    var base64Data = src.replace(/^data:image\/(.*?);base64,/, "");
    var contentType = (0, exports.getImageTypeFromB64)(src);
    var sliceSize = 1024;
    var byteCharacters = atob(base64Data);
    var bytesLength = byteCharacters.length;
    var slicesCount = Math.ceil(bytesLength / sliceSize);
    var byteArrays = new Array(slicesCount);
    for (var i = 0; i < slicesCount; ++i) {
        var begin = i * sliceSize;
        var end = Math.min(begin + sliceSize, bytesLength);
        var bytes = new Array(end - begin);
        for (var offset = begin, i_1 = 0; offset < end; ++i_1, ++offset)
            bytes[i_1] = byteCharacters[offset].charCodeAt(0);
        byteArrays[i] = new Uint8Array(bytes);
    }
    return new Blob(byteArrays, { type: contentType });
};
exports.base64toBlob = base64toBlob;
var fileToB64 = function (file) {
    return new Promise(function (res, rej) {
        var reader = new FileReader();
        reader.onload = function () { return res(reader.result); };
        reader.onerror = function (err) { return rej(err); };
        reader.readAsDataURL(file);
    });
};
exports.fileToB64 = fileToB64;
var imageUrlToB64 = function (url) {
    return fetch(url)
        .then(function (x) { return x.blob(); })
        .then(function (x) { return (0, exports.fileToB64)(x); });
};
exports.imageUrlToB64 = imageUrlToB64;
var getDynamicVal = function (x) {
    return typeof x === "function" ? x() : x;
};
exports.getDynamicVal = getDynamicVal;
var getDynamicObj = function (x) {
    return Object.fromEntries(Object.entries(x).map(function (_a) {
        var k = _a[0], v = _a[1];
        return [k, (0, exports.getDynamicVal)(v)];
    }));
};
exports.getDynamicObj = getDynamicObj;
