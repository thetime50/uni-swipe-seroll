
export const obj2StyleStr = (obj) => {
  return Object.keys(obj).reduce((t, v, i, a) => {
    return t + `${v}:${obj[v]};`
  }, '')
}
