export const A_235 = (input: string) => {
  const abc = Number(input.trim());
  const bca = Number(`${input.trim()[1]}${input.trim()[2]}${input.trim()[0]}`)
  const cab = Number(`${input.trim()[2]}${input.trim()[0]}${input.trim()[1]}`)
  console.log(abc + bca + cab);
}