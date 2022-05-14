export const A_229 = (input: string) => {
  const [S1, S2] = [...input.trim().split('\n')];
  if (S1 == '.#' && S2 == '#.' || S1 == '#.' && S2 == '.#') {
    return console.log('No')
  }
  console.log('Yes')
}