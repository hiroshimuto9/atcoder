export const A_091 = (input: string) => {
  const [A, B, C] = [...input.trim().split(' ').map(Number)];
  console.log(A+B>=C ? 'Yes': 'No');
}