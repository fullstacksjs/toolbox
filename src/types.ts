export type Truthy<T> = T extends '' | 0 | false | null | undefined ? never : T;
