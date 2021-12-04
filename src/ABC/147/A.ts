export const A_147 = (input: string) => {
  const inputVal = input.trim().split(' ').map(Number);
  const total = inputVal.reduce((p, c) => p + c);
  console.log(total >= 22 ? 'bust' : 'win');
}