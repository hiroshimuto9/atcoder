export const A_083 = (input: string) => {
  const [A, B, C, D] = [...input.trim().split(' ').map(Number)];
  const left = A + B
  const right = C + D
  if (left === right) return console.log('Balanced');
  if (left > right) return console.log('Left');
  if (right > left) return console.log('Right');
}