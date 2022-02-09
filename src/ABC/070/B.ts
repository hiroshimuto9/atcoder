export const B_070 = (input: string) => {
  const [A, B, C, D] = [...input.trim().split(' ').map(Number)]
  const min = Math.min(B,D) - Math.max(A,C)
  console.log(min > 0 ? min : 0)
}