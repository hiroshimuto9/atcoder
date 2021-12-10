export const A_136 = (input: string) => {
  const [A, B, C] = [...input.trim().split(' ').map(Number)];
  console.log(Math.max(0,C - (A - B)));
}