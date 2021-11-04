export const A_193 = (input: string) => {
  const inputVal = input.trim().split(' ').map(Number);
  const [A, B] = [...inputVal];
  console.log(((A - B) / A) * 100);
}