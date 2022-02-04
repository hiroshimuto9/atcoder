export const B_075 = (input: string) => {
  const [HW, ...sList] = [...input.trim().split('\n')]
  const [H, W] = [...HW.split(' ').map(Number)]
  const S = sList.map(e => e.split(''))
  const bomb = '#';
  let ans = '';
  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      let count = 0
      if (S[i][j] === bomb) {
        ans += bomb;
        continue
      }
      if(S[i][j+1] === bomb) { count++ }
      if(S[i][j-1] === bomb) { count++ }
      if(S[i - 1] && S[i - 1][j - 1] === bomb) { count++; }
      if(S[i - 1] && S[i - 1][j] === bomb) { count++; }
      if(S[i - 1] && S[i - 1][j + 1] === bomb) { count++; }
      if(S[i + 1] && S[i + 1][j - 1] === bomb) { count++; }
      if(S[i + 1] && S[i + 1][j] === bomb) { count++; }
      if(S[i + 1] && S[i + 1][j + 1] === bomb) { count++; }
      ans += count;
    }
    ans += "\n";
  }
  console.log(ans);
}