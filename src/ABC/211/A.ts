export const A_211 = (input: string) => {
  const inputVal = input.trim().split(' ');
  const [A, B] = [...inputVal];
  const C = (+A - +B)/3 + +B
  console.log(C);
}