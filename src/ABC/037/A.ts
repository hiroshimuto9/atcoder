export const A_037 = (input: string) => {
  const [A, B, C] = [...input.trim().split(' ').map(Number)];
  console.log(Math.floor(C / Math.min(A, B)));
}