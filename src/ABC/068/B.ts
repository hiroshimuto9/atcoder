export const B_068 = (input: string) => {
  const N = +input.trim()
  let ans: number = 1;
  for (let i = 1; i <= N; i *= 2) {
    ans = i;
  }
  console.log(ans);
}