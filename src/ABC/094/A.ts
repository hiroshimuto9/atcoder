export const A_094 = (input: string) => {
  const [A, B, X] = [...input.trim().split(' ').map(Number)];
  const total = A + B;
  const flg = total >= X && X >= A;
  console.log(flg ? 'YES' : 'NO');
}