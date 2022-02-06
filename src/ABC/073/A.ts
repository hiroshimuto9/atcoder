export const A_073 = (input: string) => {
  const N = [...input.trim().split('')]
  if (N.includes('9')) return console.log('Yes')
  console.log('No')
}