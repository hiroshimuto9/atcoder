export const A_137 = (input: string) => {
  const [A, B] = [...input.trim().split(' ').map(Number)];
  console.log(Math.max(A+B, A-B, A*B))
}