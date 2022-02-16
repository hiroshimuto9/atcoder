export const A_063 = (input: string) => {
  const [A, B] = [...input.trim().split(' ').map(Number)]
  console.log(A+B >= 10 ? 'error' : A+B)
}