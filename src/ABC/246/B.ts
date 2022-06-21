export const B_246 = (input: string) => {
  const [A, B] = [...input.trim().split(' ').map(Number)];
  const distance = Math.sqrt(A * A + B * B);
  const x = A / distance;
  const y = B / distance
  console.log(`${x} ${y}`);
}
