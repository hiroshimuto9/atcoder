export const A_008 = (input: string) => {
  const [S, T] = [...input.trim().split(' ').map(Number)];
  console.log(T-S+1);
}