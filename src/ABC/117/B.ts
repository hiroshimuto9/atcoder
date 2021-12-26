export const B_117 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const lList = inputVal[1].split(' ').map(Number);
  const max = Math.max(...lList);
  const maxIndex = lList.indexOf(max);
  lList.splice(maxIndex, 1)
  const sum = lList.reduce((p,c)=> p += c)
  console.log(max < sum ? 'Yes' : 'No');
}