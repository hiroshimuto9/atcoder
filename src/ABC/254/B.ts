export const B_254 = (input: string) => {
  const N = +input;
  const aList: number[][] = [];
  for (let i = 0; i < N; i += 1) {
    aList[i] = [];
    for (let j = 0; j <= i; j += 1) {
      if (0 === j || i === j) {
        aList[i][j] = 1;
      } else {
        aList[i][j] = aList[i - 1][j - 1] + aList[i - 1][j];
      }
    }
    console.log(aList[i].join(' '));
  }
}
