export const B_059 = (input: string) => {
  const [A, B] = [...input.trim().split('\n').map(Number)]
  console.log(A>B ? 'GREATER' : A < B ? 'LESS' : 'EQUAL')
}