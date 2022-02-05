export const A_074 = (input: string) => {
  const [N, A] = [...input.trim().split('\n').map(Number)]
  console.log(N*N-A)
}