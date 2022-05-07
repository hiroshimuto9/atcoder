export const A_225 = (input: string) => {
  const S = input.trim();
  const sSize = new Set(S).size;
  console.log(sSize === 1 ? 1 : sSize === 2 ? 3 : 6);
}