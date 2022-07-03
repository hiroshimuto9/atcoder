export const B_252 = (input: string) => {
  const [NK, aList, bList] = [...input.trim().split('\n')];
  const aNumList = [...aList.split(' ').map(Number)]
  const bNumList = [...bList.split(' ').map(Number)]
  const max = Math.max(...aNumList);
  const maxIndexList: number[] = [];
  aNumList.forEach((val, i) => {
    val === max && maxIndexList.push(i + 1);
  });
  if (maxIndexList.some((i) => bNumList.some((b) => i === b))) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
