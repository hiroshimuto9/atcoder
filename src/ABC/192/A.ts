export const A_192 = (input: string) => {
  const inputVal = input.trim();
  if (+inputVal < 100) return console.log(100 - +inputVal);
  console.log(100 - +inputVal % 100);
}