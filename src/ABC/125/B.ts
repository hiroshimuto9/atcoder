export const B_125 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const N = +inputVal[0];
  const vList = [...inputVal[1].split(' ').map(Number)];
  const cList = [...inputVal[2].split(' ').map(Number)];
  let plusDiffList: number[] = [];
  for(let i = 0; i < N; i++) {
    const diff = vList[i] - cList[i];
    if (diff >= 0) {
      plusDiffList.push(diff);
    }
  }
  const max = plusDiffList.reduce((p,c) => p + c, 0);
  console.log(max);
}