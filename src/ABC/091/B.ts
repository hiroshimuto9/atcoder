export const B_091 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const N = +inputVal[0];
  const s = inputVal.slice(1, N + 1);
  const M = +inputVal[N+1];
  const t = inputVal.slice(N + 2, N + 2 + M)

  const totalList = s.map((v) => {
    let total = 0
    for (let i = 0; i < N; i++) {
      if (s[i] === v) {
        total++
      }
    }

    for (let i = 0; i < M; i++) {
      if (t[i] === v) {
        total--
      }
    }
    return total
  })
  const max = Math.max(...totalList);
  console.log(max < 0 ? 0 : max);
}