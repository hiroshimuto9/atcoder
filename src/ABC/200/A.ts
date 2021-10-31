export const A_200 = (input: string) => {
  const inputVal = input.trim();
  const N = +inputVal;
  const output = Math.ceil(N / 100);
  return console.log(output);
}