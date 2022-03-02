export const A_046 = (input: string) => {
  const [a, b, c] = input.trim().split(' ').map(Number);
  console.log(new Set([a, b, c]).size)
}