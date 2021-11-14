export const B_176 = (input: string) => {
  const inputVal = input.trim().split('').map(Number);
  const total = inputVal.reduce((p, c) => p + c);
  const output = total % 9;
  console.log(output === 0 ? 'Yes' : 'No');
}