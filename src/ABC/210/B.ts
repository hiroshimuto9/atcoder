export const B_210 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const [N, S] = [...inputVal];
  const SArray = [...S];
  const badIndex = SArray.findIndex((x) => x === '1');
  if((badIndex + 1) % 2 !== 0) return console.log('Takahashi');
  return console.log('Aoki');
}