export const A_106 = (input: string) => {
  const [A, B] = [...input.trim().split(' ').map(Number)];
  console.log((A*B) - ((A*1) + (B*1) - 1));
}