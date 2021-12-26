export const A_118 = (input: string) => {
  const [A, B] = [...input.trim().split(' ').map(Number)];
  console.log(B % A === 0 ? A + B : B - A);
}