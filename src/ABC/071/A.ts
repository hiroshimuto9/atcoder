export const A_071 = (input: string) => {
  const [x, a, b] = [...input.trim().split(' ').map(Number)]
  console.log(Math.abs(a - x) > Math.abs(b - x) ? 'B' : 'A')
}