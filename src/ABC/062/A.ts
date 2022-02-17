export const A_062 = (input: string) => {
  const [x, y] = [...input.trim().split(' ').map(Number)]
  const ga = [1,3,5,7,8,10,12]
  const gb = [4,6,9,11]
  const flg = ga.includes(x) && ga.includes(y) || gb.includes(x) && gb.includes(y)
  console.log(flg ? 'Yes' : 'No')
}