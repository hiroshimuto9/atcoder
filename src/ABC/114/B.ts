export const B_114 = (input: string) => {
  const sList = [...input.trim().split('').map(Number)];
  let numList: number[] = [];
  for (let i = 0 ; i < sList.length - 2; i++) {
    const num = Number([sList[i], sList[i+1], sList[i+2]].join(''));
    numList.push(num);
  }
  let diffList = [];
  for (let i = 0; i < numList.length; i++) {
    const diff = Math.abs(753 - numList[i]);
    diffList.push(diff);
  }
  console.log(Math.min(...diffList));
}