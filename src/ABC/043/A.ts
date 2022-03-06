export const A_043 = (input: string) => {
  const N = +input.trim();
  let output = 0;
  for (let i = 1; i <= N; i++) {
    output += i
  }
  console.log(output);
}