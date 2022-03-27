export const A_026 = (input: string) => {
  const A = +input.trim();
  let answer = 0;
  for (let x = 0; x <= A; x++) {
    const y = A - x;
    answer = Math.max(answer, x*y)
  }
  console.log(answer)
}