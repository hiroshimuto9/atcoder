export const A_240 = (input: string) => {
  const [a, b] = [...input.trim().split(' ').map(Number)];
  if (a === 1 && b === 10) return console.log('Yes');
  console.log(b - a === 1 ? 'Yes' : 'No');
}
