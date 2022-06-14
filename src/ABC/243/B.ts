export const B_243 = (input: string) => {
  const [N, aList, bList] = [...input.trim().split('\n')];
  const aNumList = [...aList.split(' ').map(Number)];
  const bNumList = [...bList.split(' ').map(Number)];
  let firstAnswer = 0;
  let secondAnswer = 0;
  for (let i = 0; i < +N; i++) {
    if (aNumList[i] === bNumList[i]) firstAnswer++
  }
  const tmp = (2 * +N) - (new Set([...aNumList, ...bNumList])).size;
  secondAnswer = Math.abs(tmp - firstAnswer);
  console.log(firstAnswer);
  console.log(secondAnswer);
}
