export const A_001 = (input: string) => {
  const [H1, H2] = [...input.trim().split('\n').map(Number)];
  console.log(H1-H2);
}