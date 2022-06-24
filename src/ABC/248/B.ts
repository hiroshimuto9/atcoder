export const B_248 = (input: string) => {
  const [A, B, K] = [...input.trim().split(' ').map(BigInt)];
  let answer = 0n;
  while (A * K ** answer < B) {
    answer += 1n;
  }
  console.log(answer.toString())
}
