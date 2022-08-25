type CompositeFn = <T>(value: T) => Promise<T> | T;
type NxFn = <T>(...args: CompositeFn[]) => Promise<T>;

interface NxStatic {
  promiseCompose: NxFn;
}

export = NxFn;
