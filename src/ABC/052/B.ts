export const B_052 = (input: string) => {
  const [N, S] = input.trim().split('\n');
  let answer = 0;
  let x = 0;
  for (let i = 0; i < +N; i++) {
    if (S[i] === 'I') {
      x++
    }
    if (S[i] === 'D') {
      x--
    }
    answer = Math.max(answer, x)
  }
  console.log(answer)
}