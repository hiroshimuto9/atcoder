export const A_138 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const a = +inputVal[0];
  const s = inputVal[1];
  console.log(a >= 3200 ? s : 'red');
}