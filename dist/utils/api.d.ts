declare const catchError: <T>(promise: Promise<T>) => Promise<[undefined, T] | [Error]>;
export default catchError;
