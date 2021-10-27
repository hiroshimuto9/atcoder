export const A_209 = (input: string) => {
  const inputVal = input.trim().split(' ');
  const [A, B] = [...inputVal];
  if (+A > +B) return console.log(0);
  return console.log((+B - +A) + 1);
}