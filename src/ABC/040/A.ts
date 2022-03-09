export const A_040 = (input: string) => {
  const [n, x] = [...input.trim().split(' ').map(Number)];
  console.log(Math.min(x-1, n-x));
}