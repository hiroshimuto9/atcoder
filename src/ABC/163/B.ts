export const B_163 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const [N, M] = [...inputVal[0].split(' ').map(Number)];
  const AList = [...inputVal[1].split(' ').map(Number)];
  const costDays = AList.reduce((p, c) => p + c);
  if (N - costDays >= 0) {
    return console.log(N - costDays);
  } else {
    return console.log(-1);
  }
}