export const B_096 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const [A, B, C] = [...inputVal[0].split(' ').map(Number)];
  const K = +inputVal[1];
  const max = Math.max(A, B, C);
  console.log(max * 2 ** K + A + B + C - max);
}