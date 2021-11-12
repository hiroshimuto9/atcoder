export const B_178 = (input: string) => {
  const inputVal = input.trim().split(' ').map(BigInt);
  const [a, b, c, d] = [...inputVal];
  const output = [a*c, a*d, b*c, b*d].reduce((prev, cur) => cur < prev ? prev : cur);
  console.log(output.toString());
}