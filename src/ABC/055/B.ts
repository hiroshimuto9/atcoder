export const B_055 = (input: string) => {
  const N = +input.trim();
  let output = 1;
  for (let i = 1; i <= N; i++) {
    output *= i;
    output %= Math.pow(10, 9)+7
  }
  console.log(output);
}