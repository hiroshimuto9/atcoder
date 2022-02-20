export const A_058 = (input: string) => {
  const [a, b, c] = [...input.trim().split(' ').map(Number)]
  console.log(b-a === c-b ? 'YES' : 'NO')
}