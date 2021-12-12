export const B_134 = (input: string) => {
  const [N, D] = [...input.trim().split(' ').map(Number)];
  const len = D * 2 + 1;
  console.log(Math.ceil(N / len));
}