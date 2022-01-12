export const A_098 = (input: string) => {
  const [A, B]= [...input.trim().split(' ').map(Number)];
  let max = Math.max(A-B, A*B, A+B);
  if(max === 0) max = 0
  console.log(max);
}