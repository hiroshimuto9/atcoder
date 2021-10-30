export const A_204 = (input: string) => {
  const inputVal = input.trim().split(' ').map(tmp => +tmp);
  const [x, y] = [...inputVal];
  if (x === y) return console.log(x);
  const output = (3 - (x + y));
  return console.log(output);
}