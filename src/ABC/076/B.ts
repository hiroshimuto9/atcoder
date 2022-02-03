export const B_076 = (input: string) => {
  const [N, K] = [...input.trim().split('\n').map(Number)]
  let output = 1;
  for(let i = 1; i <= N; i++) {
    output = Math.min(output * 2, output + K);
  }
  console.log(output);
}