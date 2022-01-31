export const A_079 = (input: string) => {
  const nList = [...input.trim().split('')]
  const flg = (nList[0] === nList[1] && nList[1] === nList[2]) ||
  (nList[1] === nList[2] && nList[2] === nList[3])
  console.log(flg ? 'Yes' : 'No')
}