export const A_159 = (input: string) => {
  const inputVal = input.trim().split(' ').map(Number);
  const [N, M] = [...inputVal];
  const output = (N * (N -1) / 2) + (M * (M -1) / 2);
  console.log(output);
}