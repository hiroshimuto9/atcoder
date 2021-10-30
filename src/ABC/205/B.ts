export const B_205 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const [N, AList] = [...inputVal];
  let numList = [];
  for (let i = 1; i <= +N; i++) {
    numList.push(i);
  }
  const sortedAList = AList.split(' ').map(x => +x).sort((a, b) => a - b);
  if(sortedAList.toString() === numList.toString()) return console.log('Yes');
  return console.log('No');
}