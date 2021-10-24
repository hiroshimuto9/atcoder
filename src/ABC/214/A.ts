export const A_214 = (input: string) => {
  const inputVal = input.trim();
  const N = +inputVal;
  if(N <= 125) return console.log(4);
  if(N <= 211) return console.log(6);
  if(N <= 214) return console.log(8);
}