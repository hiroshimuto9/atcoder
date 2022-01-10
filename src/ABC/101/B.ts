export const B_101 = (input: string) => {
  const N = +input.trim();
  const S = N.toString().split('').map(Number).reduce((p,c) => p+c);
  if (N % S === 0) return console.log('Yes');
  return console.log('No');
}