export const A_143 = (input: string) => {
  const inputVal = input.trim().split(' ').map(Number);
  const [A, B] = [...inputVal];
  console.log(A - B * 2 >= 0 ? A - B * 2 : 0)
}