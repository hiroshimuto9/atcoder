export const A_230 = (input: string) => {
  const N = input.trim();
  const zero = "0".repeat(3-N.length);
  const over = +N >= 42;
  console.log(over ? `AGC${zero}${+N+1}` : `AGC${zero}${+N}`);
}