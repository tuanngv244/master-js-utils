const catchError = <T>(
  promise: Promise<T>
): Promise<[undefined, T] | [Error]> => {
  return promise
    .then((res) => [undefined, (res as { data: T }).data] as [undefined, T])
    .catch((err) => [err]);
};

const retryFetch = async (
  fn: (...args: any[]) => void,
  retries = 3,
  delay = 0
) => {
  return async (...args: any[]) => {
    for (let count = 0; count < retries; count++) {
      try {
        await fn(...args);
        break;
      } catch (err) {
        if ((err as { code: string })?.code !== "ERR_CANCELLED") {
          await new Promise((resolve) => setTimeout(resolve, delay));
        } else {
          break;
        }
      }
    }
  };
};

export default {
  catchError,
  retryFetch,
};
