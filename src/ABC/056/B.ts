export const B_056 = (input: string) => {
  const [W, a, b] = [...input.trim().split(' ').map(Number)]
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  const output = min + W < max ? max - min - W : 0;
  console.log(output);
}