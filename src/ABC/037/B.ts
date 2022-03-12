export const B_037 = (input: string) => {
  const [NQ, ...operationList] = [...input.trim().split('\n')];
  const [N, Q] = [...NQ.split(' ').map(Number)]
  let defaultArray = new Array(N).fill(0);
  for (let i = 0; i < operationList.length; i++) {
    const [L, R, T] = [...operationList[i].split(' ').map(Number)]
    for (let j = L-1; j < R; j++) {
      defaultArray[j] = T;
    }
  }
  console.log(defaultArray.join('\n'));
}