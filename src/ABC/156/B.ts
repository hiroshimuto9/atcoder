export const B_156 = (input: string) => {
  const inputVal = input.trim().split(' ').map(Number);
  const [N, K] = [...inputVal];
  const converted = N.toString(K);
  console.log(converted.toString().length)
}