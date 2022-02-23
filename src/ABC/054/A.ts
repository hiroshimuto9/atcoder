export const A_054 = (input: string) => {
  const [A, B] = input.trim().split(' ').map(Number);
  if (A === B) return console.log('Draw')
  if (A === 1)　return console.log('Alice')
  if (B === 1)　return console.log('Bob')
  console.log(A > B ? 'Alice' : 'Bob')
}