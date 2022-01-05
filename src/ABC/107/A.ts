export const A_107 = (input: string) => {
  const [N, i] = [...input.trim().split(' ').map(Number)];
  console.log(N-i+1);
}