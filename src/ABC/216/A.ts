export const A_216 = (input: string) => {
  const inputVal = input.split(".");
  const [X, Y] = [...inputVal];
  if(+Y <= 2) return console.log(`${X}-`);
  if(+Y <= 6) return console.log(`${X}`);
  if(+Y <= 9) return console.log(`${X}+`);
}