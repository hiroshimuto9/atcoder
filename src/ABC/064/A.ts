export const A_064 = (input: string) => {
  const val = [...input.trim().split(' ').map(Number)].join('')
  console.log(Number(val) % 4 === 0 ? 'YES' : 'NO')
}