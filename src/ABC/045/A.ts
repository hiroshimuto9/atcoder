export const A_045 = (input: string) => {
  const [a, b, h] = input.trim().split('\n').map(Number);
  console.log((a+b) * h / 2)
}