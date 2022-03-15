export const A_034 = (input: string) => {
  const [x, y] = [...input.trim().split(' ').map(Number)];
  console.log(x < y ? 'Better' : 'Worse')
}