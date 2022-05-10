export const A_227 = (input: string) => {
  const [N, K, A] = [...input.trim().split(' ').map(Number)];
  const result = (A + K - 1) % N;
  console.log(result === 0 ? N : result);
}