export const B_048 = (input: string) => {
  const [a, b, x] = input.trim().split(' ').map(BigInt);
  const from = a === 0n ? -1n : (a-1n)/x;
  const to = b/x;
  const result = to - from;
  console.log(result.toString());
}

// 解説
// このような問題では，
// f(n) := 0 以上 n 以下の整数のうち条件を満たすものの個数
// と定義しておくと，答えは f(b) − f(a − 1) で求まるので楽です．ただし，a = 0 のときに f(−1) が呼ばれる
// ことに注意してください．このことに注意すると，f は次のように書けます．
// f(n) = {
//   n/x + 1 (n ≥ 0)
//   0 (n = −1)
// }