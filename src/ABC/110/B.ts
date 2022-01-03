export const B_110 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const [N, M, X, Y] = [...inputVal[0].split(' ').map(Number)];
  const xList = [...inputVal[1].split(' ').map(Number)];
  const yList = [...inputVal[2].split(' ').map(Number)];
  const pointList = [...xList, ...yList];
  let noWarFlg = false;
  for (let i = 0; i < pointList.length; i++) {
    const point = pointList[i];
    const condition1 = point > X && point <= Y;
    const condition2 = point > Math.max(...xList);
    const condition3 = point <= Math.min(...yList);
    if (condition1 && condition2 && condition3) {
      noWarFlg = true
    }
  }
  console.log(noWarFlg ? 'No War' : 'War');
}