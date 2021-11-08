export const B_183 = (input: string) => {
  const inputVal = input.trim().split(' ').map(Number);
  const [SX, SY, GX, GY] = [...inputVal];
  const output = (SX * GY + GX * SY) / (SY + GY);
  console.log(output);
}