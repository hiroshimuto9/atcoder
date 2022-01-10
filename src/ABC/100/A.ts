export const A_100 = (input: string) => {
  const [A, B] = [...input.trim().split(' ').map(Number)];
  if (A <= 8 && B <= 8) {
    return console.log('Yay!');
  }
  return console.log(':(');
}