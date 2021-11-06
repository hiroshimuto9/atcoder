export const A_189 = (input: string) => {
  const inputVal = input.trim().split('');
  const sameTxt = new Set(inputVal).size === 1;
  return console.log(sameTxt ? 'Won' : 'Lost');
}