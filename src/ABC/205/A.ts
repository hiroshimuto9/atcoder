export const A_205 = (input: string) => {
  const inputVal = input.trim().split(' ');
  const [A, B] = [...inputVal];
  const output = (+B / 100) * +A;
  console.log(output);
}