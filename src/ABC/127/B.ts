export const B_127 = (input: string) => {
  const [r, D, x] = [...input.trim().split(' ').map(Number)];
  let output: number[] = [r*x-D];
  for (let i = 0; i < 9; i++) {
    const tmp: number = r*output[i] - D;
    output.push(tmp);
  }
  output.forEach((v) => console.log(v));
}