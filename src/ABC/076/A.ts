export const A_076 = (input: string) => {
  const [R, G] = [...input.trim().split('\n').map(Number)]
  const output = G * 2 - R
  console.log(output);
}