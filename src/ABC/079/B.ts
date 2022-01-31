export const B_079 = (input: string) => {
  const N = +input.trim();
  const L = [2n, 1n];
  for (let i = 2; i <= N; i++) {
    L[i] = L[i - 1] + L[i - 2];
  }
  console.log(L[N].toString());
}