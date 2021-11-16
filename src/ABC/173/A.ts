export const A_173 = (input: string) => {
  const inputVal = +input.trim();
  const output = inputVal - (1000 * (Math.ceil(inputVal / 1000)));
  console.log(Math.abs(output));
}