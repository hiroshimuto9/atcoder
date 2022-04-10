export const B_016 = (input: string) => {
  const [A, B, C] = [...input.trim().split(' ').map(Number)];
  const plus = A+B === C;
  const minus = A-B === C;
  if (plus && minus) return console.log('?');
  if (plus) return console.log('+');
  if (minus) return console.log('-');
  console.log('!')
}