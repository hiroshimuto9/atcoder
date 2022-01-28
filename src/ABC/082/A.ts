export const A_082 = (input: string) => {
  const [a, b] = [...input.trim().split(' ').map(Number)];
  console.log(Math.ceil((a + b) / 2));
}