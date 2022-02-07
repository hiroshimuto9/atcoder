export const A_072 = (input: string) => {
  const [X, t] = [...input.trim().split(' ').map(Number)]
  console.log(X-t <= 0 ? 0 : X-t)
}