export const A_182 = (input: string) => {
  const inputVal = input.trim().split(' ').map(Number);
  const [A, B] = [...inputVal];
  const limit = 2 * A + 100;
  console.log(limit - B);
}