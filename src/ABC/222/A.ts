export const A_222 = (input: string) => {
  const N = input.trim();
  const zeroPrefixes = '0'.repeat(4 - N.length)
  console.log(`${zeroPrefixes}${N}`)
}