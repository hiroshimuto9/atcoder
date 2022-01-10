export const B_100 = (input: string) => {
  const [D, N] = [...input.trim().split(' ').map(Number)];
  const tmp = N === 100 ? N+1 : N;
  const result = (100 ** D) * tmp;
  console.log(result);
}