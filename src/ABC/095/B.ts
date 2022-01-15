export const B_095 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const [N, S] = [...inputVal[0].split(' ').map(Number)];
  const [, ...mList] = [...inputVal];
  const mListNum = mList.map(Number);
  const remaining = S - mListNum.reduce((p,c) => p+c);
  const min = Math.min(...mListNum);
  console.log(N + Math.floor(remaining/min));
}