export const A_196 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const [a, b] = inputVal[0].split(' ').map(Number);
  const [c, d] = inputVal[1].split(' ').map(Number);
  console.log(b - c);
}