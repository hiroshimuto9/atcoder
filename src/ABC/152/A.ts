export const A_152 = (input: string) => {
  const inputVal = input.trim().split(' ').map(Number);
  const [N, M] = [...inputVal];
  console.log(N === M ? 'Yes' : 'No');
}