export const A_170 = (input: string) => {
  const inputVal = input.trim().split(' ').map(Number);
  const output = inputVal.indexOf(0);
  console.log(output + 1);
}