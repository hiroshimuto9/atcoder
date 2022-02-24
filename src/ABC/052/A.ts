export const A_052 = (input: string) => {
  const [A, B, C, D] = input.trim().split(' ').map(Number);
  console.log(Math.max(A*B, C*D))
}