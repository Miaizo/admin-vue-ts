/**
 * 金额格式化
 * @param num 金额
 * @param symbol 金额前面修饰符号，如$,￥
 */
export function format(num: number | string, symbol = '￥'): string {
  if (Number.isNaN(Number(num))) return `${symbol}0.00`
  return symbol + (Number(num).toFixed(2))
    .replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
}