export const A_220 = (input: string) => {
  const inputVal = input.split(" ");
  const A: number = parseInt(inputVal[0], 10);
  const B: number = parseInt(inputVal[1], 10);
  const C: number = parseInt(inputVal[2], 10);
  const ans = (Math.floor(B/C)) * C;
  if (ans >= A) return console.log(ans);
  return console.log(-1);
}