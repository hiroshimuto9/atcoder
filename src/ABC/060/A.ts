export const A_060 = (input: string) => {
  const [A, B, C] = [...input.trim().split(' ')]
  const flg = A[A.length-1] === B[0] && B[B.length-1] === C[0]
  console.log(flg ? 'YES' : 'NO')
}