export const B_089 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const sList = inputVal[1].split(' ');
  const count = new Set(sList).size;
  console.log(count === 3 ? 'Three' : 'Four');
}