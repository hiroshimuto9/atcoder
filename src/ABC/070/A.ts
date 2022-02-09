export const A_070 = (input: string) => {
  const nList = [...input.trim().split('')]
  console.log(nList[0] === nList[2] ? 'Yes' : 'No')
}