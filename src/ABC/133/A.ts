export const A_133 = (input: string) => {
  const [N, A, B] = [...input.trim().split(' ').map(Number)];
  console.log(Math.min(N*A, B));
}