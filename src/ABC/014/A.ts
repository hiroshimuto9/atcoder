export const A_014 = (input: string) => {
  const [a, b] = [...input.trim().split('\n').map(Number)];
  const output = a % b === 0 ? 0 : b - a%b;
  console.log(output);
}