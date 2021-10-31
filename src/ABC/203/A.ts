export const A_203 = (input: string) => {
  const inputVal = input.trim().split(' ').map(tmp => +tmp);
  const [a, b, c] = [...inputVal];
  if(a === b && a === c) return console.log(a);
  if (a === b && a !== c) return console.log(c);
  if (a !== b && a === c) return console.log(b);
  if (b === c && a !== b && a !==c ) return console.log(a);
  return console.log(0);
}