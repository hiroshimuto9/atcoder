export const B_086 = (input: string) => {
  const [a, b] = [...input.trim().split(' ').map(Number)];
  const num = Number(`${a}${b}`)
  const root = Math.sqrt(num);
  console.log(root % 1 === 0 ? 'Yes' : 'No')
}