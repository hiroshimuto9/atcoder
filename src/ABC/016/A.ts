export const A_016 = (input: string) => {
  const [M, D] = [...input.trim().split(' ').map(Number)];
  console.log(M % D === 0 ? 'YES' : 'NO');
}