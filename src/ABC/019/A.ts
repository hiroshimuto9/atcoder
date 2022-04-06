export const A_019 = (input: string) => {
  const [a, b, c] = [...input.trim().split(' ').map(Number)];
  console.log([a,b,c].sort((t, k) => t - k)[1])
}