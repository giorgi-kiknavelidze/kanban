export const insertInArray = <T>(arr: T[], item: T, index: number): T[] => [
  ...arr.slice(0, index),
  item,
  ...arr.slice(index),
];
