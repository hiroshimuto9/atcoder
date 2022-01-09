export const A_102 = (input: string) => {
  const N = +input.trim();
  if (N % 2 === 0) return console.log(N);
  console.log(N*2);
}