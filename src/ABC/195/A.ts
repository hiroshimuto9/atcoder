export const A_195 = (input: string) => {
  const inputVal = input.trim().split(' ').map(Number);
  const [M, H] = [...inputVal];
  if (H % M === 0) return console.log('Yes');
  return console.log('No');
}