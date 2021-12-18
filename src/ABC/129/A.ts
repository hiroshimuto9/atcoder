export const A_129 = (input: string) => {
  const [P, Q, R] = [...input.trim().split(' ').map(Number)];
  console.log(Math.min(P+Q, P+R, Q+R))
}