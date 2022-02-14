export const A_065 = (input: string) => {
  const [X, A, B] = [...input.trim().split(' ').map(Number)]
  const diff = A - B;
  if (diff >= 0) return console.log('delicious')
  const past = X - Math.abs(diff)
  if (past >= 0) return console.log('safe')
  console.log('dangerous')
}