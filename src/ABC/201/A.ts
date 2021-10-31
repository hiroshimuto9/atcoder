export const A_201 = (input: string) => {
  const inputVal = input.trim().split(' ').map(Number);
  const [A1, A2, A3] = [...inputVal].sort((a, b) => a - b);
  const output = (Math.abs(A3 - A2) === Math.abs(A2 - A1));
  return console.log(output ? 'Yes' : 'No');
}