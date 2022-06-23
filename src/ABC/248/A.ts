export const A_248 = (input: string) => {
  const numList = [...input.trim().split('').map(Number)];
  console.log(45 - numList.reduce((c, p) => c + p));
}
