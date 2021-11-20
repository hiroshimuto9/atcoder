export const A_169 = (input: string) => {
  const inputVal = input.trim().split(' ').map(Number);
  const [A, B] = [...inputVal];
  console.log(A*B);
}