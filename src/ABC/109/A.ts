export const A_109 = (input: string) => {
  const [A, B] = [...input.trim().split(' ').map(Number)];
  if ((A*B) % 2 === 0) {
    return console.log('No');
  } else {
    return console.log('Yes');
  }
}