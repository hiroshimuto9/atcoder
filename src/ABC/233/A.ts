export const A_233 = (input: string) => {
  const [X, Y] = [...input.trim().split(' ').map(Number)];
  const diff = Y - X;
  console.log(diff <= 0 ? 0 : Math.ceil(diff/10));
}