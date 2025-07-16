declare const debounce: (cb: (...args: Array<string | number | object | null | undefined | unknown>) => void, delayTime: number) => (...args: (typeof cb)["arguments"]) => void;
export default debounce;
