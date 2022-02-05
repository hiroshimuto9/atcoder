export const B_074 = (input: string) => {
  const [N, K, x] = [...input.trim().split('\n')]
  const xList = x.split(' ').map(Number)
  let distance = 0;
  for (let i = 0; i < +N; i++) {
      const a = Math.abs(xList[i]) * 2;
      const b = Math.abs(xList[i] - +K) * 2;
      distance += Math.min(a, b);
  }
  console.log(distance);
}