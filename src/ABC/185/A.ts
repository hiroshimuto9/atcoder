export const A_185 = (input: string) => {
  const inputVal = input.trim().split(' ').map(Number);
  const [A1, A2, A3, A4] = [...inputVal];
  console.log(Math.min(A1, A2, A3, A4))
}