export const A_212 = (input: string) => {
  const inputVal = input.trim().split(' ');
  const [A, B] = [...inputVal];
  if(0 < +A && +B === 0) return console.log('Gold')
  if(+A === 0 && 0 < +B) return console.log('Silver')
  if(0 < +A && 0 < +B) return console.log('Alloy')
}