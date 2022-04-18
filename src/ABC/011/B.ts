export const B_011 = (input: string) => {
  const S = input.trim();
  const lowerS = S.toLowerCase();
  const output = lowerS.slice(0, 1).toUpperCase() + lowerS.slice(1);
  console.log(output);
}