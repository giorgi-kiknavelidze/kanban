import convert from 'color-convert';
import md5 from 'md5';

export const useColumnOvalColor = (columnTitle: string) =>
  `#${convert.hsv.hex([
    Number(BigInt(`0x${md5(columnTitle.toLowerCase())}`) % BigInt(360)),
    70,
    90,
  ])}`;
