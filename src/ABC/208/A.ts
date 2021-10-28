export const A_208 = (input: string) => {
  const inputVal = input.trim().split(' ');
  const [A, B] = [...inputVal];
  if(
    +B >= +A &&
    +B <= (6 * +A)
  ) return console.log('Yes');
  return console.log('No');
}