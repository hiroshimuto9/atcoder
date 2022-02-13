export const B_066 = (input: string) => {
  const S = input.trim()
  const N = S.length
  let ans = 0;
  for(let i = N-1; i >= 2; i--) {
    const A = S.substring(0, i / 2);
    const B = S.substring(i / 2, i);
    if (A == B) ans = Math.max(ans, i);
  }
  console.log(ans);
}