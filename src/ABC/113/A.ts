export const A_113 = (input: string) => {
  const [X, Y] = [...input.trim().split(' ').map(Number)];
  console.log(X + Y / 2);
}