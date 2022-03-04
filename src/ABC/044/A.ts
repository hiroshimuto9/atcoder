export const A_044 = (input: string) => {
  const [N, K, X, Y] = input.trim().split('\n').map(Number);
  if(N <= K) return console.log(N*X)
  console.log(K*X+(N-K)*Y)
}