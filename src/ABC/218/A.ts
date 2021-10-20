export const A_218 = (input: string) => {
  const inputVal = input.split('\n');
  const N = +inputVal[0];
  const S = inputVal[1];
  const sList = [...S];
  if (sList[N-1] === 'o') return console.log('Yes');
  if (sList[N-1] === 'x') return console.log('No');
}