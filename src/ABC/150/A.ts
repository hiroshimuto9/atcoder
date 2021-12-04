export const A_150 = (input: string) => {
  const inputVal = input.trim().split(' ').map(Number);
  const [K, X] =[...inputVal];
  console.log(500 * K >= X ? 'Yes' : 'No');
}