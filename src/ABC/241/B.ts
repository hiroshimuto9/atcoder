export const B_241 = (input: string) => {
  const [NM, aList, bList] = [...input.trim().split('\n')];
  const [N, M] = [...NM.split(' ').map(Number)]
  const aNumList = aList.split(' ').map(Number);
  const bNumList = bList.split(' ').map(Number);
  let result = false;
  for (let i = 0; i < M; i++) {
    const targetLength = bNumList[i];
    const isExist = aNumList.indexOf(targetLength);
    if (isExist === -1) {
      result = false;
      break
    };
    result = true;
    aNumList.splice(isExist, 1);
  }
  console.log(result ? 'Yes' : 'No');
}
