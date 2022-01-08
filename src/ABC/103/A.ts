export const A_103 = (input: string) => {
  const [A1, A2, A3] = [...input.trim().split(' ').map(Number)];
  console.log(Math.max(...[A1, A2, A3]) - Math.min(...[A1, A2, A3]));
}