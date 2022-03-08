export const A_041 = (input: string) => {
  const [s, i] = [...input.trim().split('\n')];
  console.log(s[Number(i)-1]);
}