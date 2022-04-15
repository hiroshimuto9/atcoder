export const A_012 = (input: string) => {
  const [A, B] = [...input.trim().split(' ').map(Number)]
  console.log(`${B} ${A}`)
}