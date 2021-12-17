export const A_130 = (input: string) => {
  const [X, A] = [...input.trim().split(' ').map(Number)];
  console.log(X < A ? 0 : 10);
}