export const B_139 = (input: string) => {
  const inputVal = input.trim().split(' ').map(Number);
  const [A, B] = [...inputVal];
  console.log(Math.ceil((B-1)/(A-1)));
}