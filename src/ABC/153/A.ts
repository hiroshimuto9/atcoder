export const A_153 = (input: string) => {
  const inputVal = input.trim().split(' ').map(Number);
  const [H, A] = [...inputVal];
  console.log(Math.ceil(H/A))
}