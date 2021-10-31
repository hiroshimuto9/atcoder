export const A_199 = (input: string) => {
  const inputVal = input.trim().split(' ').map(Number);
  const [A, B, C] = [...inputVal];
  const output = (A ** 2) + (B ** 2) < C ** 2;
  const result = output ? 'Yes' : 'No';
  return console.log(result);
}