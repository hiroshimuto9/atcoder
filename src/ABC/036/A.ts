export const A_036 = (input: string) => {
  const [A, B] = [...input.trim().split(' ').map(Number)];
  console.log(Math.ceil(B / A));
}