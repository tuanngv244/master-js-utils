const catchError = <T>(
  promise: Promise<T>
): Promise<[undefined, T] | [Error]> => {
  return promise
    .then((res) => [undefined, (res as { data: T }).data] as [undefined, T])
    .catch((err) => [err]);
};

export default catchError;
