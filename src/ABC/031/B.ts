export const B_031 = (input: string) => {
  const [LH, N, ...AList] = [...input.trim().split('\n')];
  const [L, H] = [...LH.split(' ').map(Number)]
  let resultList: number[] = [];
  for (let i = 0; i < AList.length; i++) {
    const pastWorkTime = +AList[i]
    if (pastWorkTime < L) {
      resultList.push(L - pastWorkTime);
    } else if (pastWorkTime > H) {
      resultList.push(-1);
    } else {
      resultList.push(0)
    }
  }
  console.log(resultList.join('\n'))
}