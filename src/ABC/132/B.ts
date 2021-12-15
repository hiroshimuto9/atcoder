export const B_132 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const N = +inputVal[0];
  const pList = [...inputVal[1].split(' ').map(Number)];
  let count = 0;
  for (let i = 1; i + 1 < N; i++) {
    const tmp1 = pList[i-1];
    const tmp2 = pList[i]
    const tmp3 = pList[i+1]
    const sortedList = [tmp1, tmp2, tmp3].sort((a,b) => b - a);
    if (tmp2 === sortedList[1]) {
      count++
    }
  }
  console.log(count);
}