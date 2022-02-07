import { ILocalStore } from '@/type/utils/tools'

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

/**
 * localStorage设置有效期
 * @param name localStorage设置名称
 * @param data 数据对象
 * @param pExpires 有效期(默认100年)
 */
 export function setLocal(name:string, data:IObject<any>, pExpires = 1000 * 60 * 60 * 24 * 365 * 100):void {
  const d = data as ILocalStore
  d.startTime = Date.now()
  d.expires = pExpires
  localStorage.setItem(name, JSON.stringify(data))
}
/**
* 判断localStorage有效期是否失效
* @param name localStorage设置名称
*/
export async function useLocal(name: string):Promise<ILocalStore> {
  return new Promise((resolve, reject) => {
      const local = getLocal<ILocalStore>(name)
      if(local.startTime + local.expires < Date.now()) reject(`${name}已超过有效期`)
      resolve(local)
  })
}
/**
* 获取localStorage对象并转成对应的类型
* @param name localStorage设置名称
*/
export function getLocal<T>(name:string):T {
  const l = localStorage.getItem(name)
  const local = JSON.parse(l !== null ? l : '{}') as unknown as T
  return local
}

/**
 * 两次编码url
 * @param url 
 * @returns 
 */
 export function decode(url: string): string {
  return decodeURIComponent(decodeURIComponent(url))
}

/**
* 两次解码url
* @param url 
* @returns 
*/
export function encode(url: string): string {
  return encodeURIComponent(encodeURIComponent(url))
}