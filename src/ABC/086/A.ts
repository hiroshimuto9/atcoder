export const A_086 = (input: string) => {
  const [a, b] = [...input.trim().split(' ').map(Number)];
  console.log((a*b) % 2 === 0 ? 'Even' : 'Odd')
}