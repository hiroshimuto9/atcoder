export const A_092 = (input: string) => {
  const [A, B, C, D] = [...input.trim().split('\n').map(Number)];
  console.log(Math.min(A,B) + Math.min(C,D));
}