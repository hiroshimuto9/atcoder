export const B_063 = (input: string) => {
  const S = [...input.trim().split('')]
  const uniqueS = new Set(S);
  console.log(S.length === uniqueS.size ? 'yes' : 'no')
}