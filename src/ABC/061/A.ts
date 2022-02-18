export const A_061 = (input: string) => {
  const [A, B, C] = [...input.trim().split(' ').map(Number)]
  const flg = C >= A && C <= B
  console.log(flg ? 'Yes':'No')
}