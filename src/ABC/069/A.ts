export const A_069 = (input: string) => {
  const [n, m] = [...input.trim().split(' ').map(Number)]
  console.log((n-1)*(m-1))
}