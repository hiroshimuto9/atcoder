export const A_187 = (input: string) => {
  const inputVal = input.trim().split(' ');
  const [A, B] = [...inputVal];
  const SA = A.split('').map(Number).reduce((p, c) => p + c);
  const SB = B.split('').map(Number).reduce((p, c) => p + c);
  console.log(Math.max(SA, SB))
}