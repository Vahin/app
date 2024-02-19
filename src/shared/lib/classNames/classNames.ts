export type Mods = Record<string, string | boolean | undefined>;

export const classNames = (
  cls: string,
  mods: Mods = {},
  additional: Array<string | undefined> = [],
): string =>
  [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([, value]) => Boolean(value))
      .map(([className]) => className),
  ]
    .join(' ')
    .trim();
