export type FalsyType = null | undefined | false | 0 | '';

export interface SerializeSearchParamsOptions {
  /**
   * The falsy types to exclude from the serialized search params.
   * @default [null, undefined]
   */
  excludeFalsyTypes?: FalsyType[];
}
