export const A_184 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const [a, b] = [...inputVal[0].split(' ').map(Number)];
  const [c, d] = [...inputVal[1].split(' ').map(Number)];
  const output = a * d - b * c;
  console.log(output);
}