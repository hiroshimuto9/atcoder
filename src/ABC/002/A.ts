export const A_002 = (input: string) => {
  const [X, Y] = [...input.trim().split(' ').map(Number)];
  console.log(Math.max(X, Y));
}