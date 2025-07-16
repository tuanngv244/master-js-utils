const debounce = (
  cb: (
    ...args: Array<string | number | object | null | undefined | unknown>
  ) => void,
  delayTime: number
) => {
  let timeoutId: NodeJS.Timeout | null = null;

  return (...args: (typeof cb)["arguments"]) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      cb(...args);
    }, delayTime);
  };
};

export default debounce;
