export const A_125 = (input: string) => {
  const [A, B, T] = [...input.trim().split(' ').map(Number)];
  const time = T + 0.5;
  const count = Math.floor(time/A) * B;
  console.log(count);
}