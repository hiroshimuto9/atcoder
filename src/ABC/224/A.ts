export const A_224 = (input: string) => {
  const S = input.trim();
  console.log(`${S[S.length - 2]}${S[S.length - 1]}` === 'er' ? 'er' : 'ist')
}