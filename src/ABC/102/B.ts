export const B_102 = (input: string) => {
  const inputVal = [...input.trim().split('\n')];
  const N = +inputVal[0];
  const aList = [...inputVal[1].split(' ').map(Number)];
  const absMax = Math.abs(Math.max(...aList) - Math.min(...aList));
  console.log(absMax);
}