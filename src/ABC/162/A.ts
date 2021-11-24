export const A_162 = (input: string) => {
  const inputVal = input.trim().split('');
  const includeSeven = inputVal.includes('7');
  console.log(includeSeven ? 'Yes' : 'No');
}