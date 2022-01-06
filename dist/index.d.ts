export declare const randomInt: (min?: number, max?: number) => number;
export declare const randomDec: (min?: number, max?: number) => number;
export declare const randomList: <T>(list: T[]) => T;
export declare const mapRange: (value: number, source: number[], target: number[]) => number;
export declare const clamp: (value: number, min: number, max: number) => number;
export declare const cleanString: (...x: any[]) => string;
export declare const pause: (ms: number) => Promise<void>;
export declare const UUID: () => string;
export declare const mmToPx: (mm: number, dpi?: number) => number;
export declare const pxToMm: (px: number, dpi?: number) => number;
export declare const getDpi: (px: number, mm: number) => number;
export declare const pipe: <T>(value: T) => {
    map: <R>(fn: (value: T) => R) => {
        map: <R_1>(fn: (value: R) => R_1) => {
            map: <R_2>(fn: (value: R_1) => R_2) => {
                map: <R_3>(fn: (value: R_2) => R_3) => {
                    map: <R_4>(fn: (value: R_3) => R_4) => {
                        map: <R_5>(fn: (value: R_4) => R_5) => {
                            map: <R_6>(fn: (value: R_5) => R_6) => {
                                map: <R_7>(fn: (value: R_6) => R_7) => {
                                    map: <R_8>(fn: (value: R_7) => R_8) => {
                                        map: <R_9>(fn: (value: R_8) => R_9) => {
                                            map: <R_10>(fn: (value: R_9) => R_10) => any;
                                            value: R_9;
                                        };
                                        value: R_8;
                                    };
                                    value: R_7;
                                };
                                value: R_6;
                            };
                            value: R_5;
                        };
                        value: R_4;
                    };
                    value: R_3;
                };
                value: R_2;
            };
            value: R_1;
        };
        value: R;
    };
    value: T;
};
export declare const uniqueArray: <T>(arr: T[]) => T[];
export declare const generateHashFromString: (str: string) => number;
export declare type FindCallbackObj<T> = (item: T[Extract<keyof T, string>], key: string, obj: T) => boolean | undefined;
export declare type MapCallbackObj<T, R> = (item: T[Extract<keyof T, string>], key: string, obj: T) => R;
export declare type ReduceCallbackObj<T, R> = (result: R, item: T[Extract<keyof T, string>], key: string, obj: T) => R;
export declare type KeysOf<T, V> = {
    [K in keyof T]: V;
};
export declare type ValueOf<T> = T[Extract<keyof T, string>];
export declare const findObjKey: <T>(obj: T, cb: FindCallbackObj<T>) => Extract<keyof T, string>;
export declare const filterObj: <T>(obj: T, cb: FindCallbackObj<T>) => Partial<T>;
export declare const reduceObj: <T, R>(obj: T, cb: ReduceCallbackObj<T, R>, result: R) => R;
export declare const mapObj: <T, R>(obj: T, cb: MapCallbackObj<T, R>) => KeysOf<T, R>;
export declare const groupObj: <T>(obj: T, key: string, ref?: string) => {
    [k: string]: (T[keyof T] & {
        [k: string]: string;
    })[];
};
export declare const groupArr: <T>(arr: T[], key: string, ref?: string) => {
    [k: string]: (T & {
        [k: string]: number;
    })[];
};
export declare const objToArr: <T>(obj: T, ref?: string) => (T[keyof T] & {
    [k: string]: string;
})[];
export declare const arrToObj: <T>(arr: T[], key?: string) => {
    [key: string]: T;
};
export declare const repeatMap: <T = number>(times: number, fn?: (i: number) => T) => T[];
export declare const increment: () => () => number;
export declare const diff: (cb: () => number, reset?: boolean) => () => number;
export declare const exec: <T extends (...args: any[]) => unknown>(fn: T, ...args: Parameters<T>) => ReturnType<T>;
export declare const debounce: <T extends (...args: any[]) => unknown>(threshold: number, fn: T) => (...args: Parameters<T>) => void;
export declare const throttle: <T extends (...args: any[]) => unknown>(threshold: number, fn: T, tail?: boolean) => (...args: Parameters<T>) => void;
export declare const memoize: <T extends (...args: any[]) => unknown, H extends (...args: Parameters<T>) => string>(fn: T, hashFn?: H) => T;
export declare const chunk: <T>(n: number, arr: T[]) => T[][];
export declare const createToggle: () => {
    get: () => boolean;
    on: () => boolean;
    off: () => boolean;
    toggle: () => boolean;
};
export declare const removeIfExists: <T>(arr: T[], cb: (x: T, i: number, obj: T[]) => boolean) => T[];
export declare const clone: <T>(obj: T) => T;
export declare const formatSize: (bytes: number) => string;
export declare const formatPrice: (price: number, decimal?: boolean, format?: {
    pre?: string;
    dot?: string;
    post?: string;
}) => string;
export declare const isIE: () => boolean;
export declare const createImage: (src: string) => Promise<HTMLImageElement>;
export declare const getImageTypeFromB64: (source: string) => string;
export declare const base64toBlob: (src: string) => Blob;
export declare const fileToB64: (file: File | Blob) => Promise<string>;
export declare const imageUrlToB64: (url: string) => Promise<string>;
