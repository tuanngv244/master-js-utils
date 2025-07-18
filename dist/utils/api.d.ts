declare const _default: {
    catchError: <T>(promise: Promise<T>) => Promise<[undefined, T] | [Error]>;
    retryFetch: (fn: (...args: any[]) => void, retries?: number, delay?: number) => Promise<(...args: any[]) => Promise<void>>;
};
export default _default;
