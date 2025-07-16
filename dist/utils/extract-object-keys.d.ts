declare const extractObjectKeys: <T extends object>(obj: T) => (keyof T)[];
export default extractObjectKeys;
