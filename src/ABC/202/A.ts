export const A_202 = (input: string) => {
  const inputVal = input.trim().split(' ').map(Number);
  const sum = inputVal.reduce((p, c) => p + c);
  return console.log(21 - sum);
}