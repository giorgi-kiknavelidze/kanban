export const isNonEmptyObject = (obj: object) =>
  Object.values(obj).filter((value) => value !== undefined).length > 0;
