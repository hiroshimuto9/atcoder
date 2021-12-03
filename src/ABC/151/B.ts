export const B_151 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const [N, K, M] = [...inputVal[0].split(' ').map(Number)];
  const AList = [...inputVal[1].split(' ').map(Number)]
  const lastScore = M * N - AList.reduce((p, c) => p + c);
  if (lastScore < 0) {
    return console.log(0);
  }
  if (lastScore <= K && lastScore >= 0) {
    return console.log(lastScore);
  } else {
    return console.log(-1);
  }
}