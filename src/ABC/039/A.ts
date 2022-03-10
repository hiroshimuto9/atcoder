export const A_039 = (input: string) => {
  const [A, B, C] = [...input.trim().split(' ').map(Number)];
  console.log(2 * (A*B + B*C + C*A));
}