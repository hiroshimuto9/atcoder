export const A_114 = (input: string) => {
  const X = +input.trim();
  const flg = X === 7 || X === 5 || X === 3;
  console.log(flg ? 'YES' : 'NO');
}