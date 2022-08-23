type CompositeFn = <T>(value: T) => Promise<T> | T;

interface NxStatic {
  promiseCompose<T>(...args: CompositeFn[]): Promise<T>;
}
