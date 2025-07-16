const extractObjectKeys = <T extends object>(obj: T): (keyof T)[] => {
  let keys: (keyof T)[] = [];
  Object.keys(obj).forEach((key) => {
    const objKey = key as keyof T;
    if (obj[objKey] !== undefined || typeof obj[objKey] !== "object") {
      keys.push(objKey);
    } else {
      keys = [...keys, ...extractObjectKeys(obj[objKey] as object)];
    }
  });
  return keys;
};

export default extractObjectKeys;
