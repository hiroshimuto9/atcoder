export const B_112 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const N = +inputVal[0].split(' ')[0];
  const T = +inputVal[0].split(' ')[1];
  let costList: number[] = [];
  for (let i = 1; i <= N; i++) {
    const t = +inputVal[i].split(' ')[1];
    if (t <= T) {
      const c = +inputVal[i].split(' ')[0];
      costList.push(c);
    };
  }
  console.log(costList.length > 0 ? Math.min(...costList) : 'TLE');
}