export const A_176 = (input: string) => {
  const inputVal = input.trim().split(' ').map(Number);
  const [N, X, T] = [...inputVal];
  const output = Math.ceil(N / X) * T;
  console.log(output);
}