export const B_194 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const N = +inputVal[0];

  let ATimes: number[] = [];
  let BTimes: number[] = [];
  for(let i= 1; i <= N; i++) {
    ATimes.push(+inputVal[i].split(' ')[0]);
    BTimes.push(+inputVal[i].split(' ')[1]);
  }
  const AminTime = Math.min(...ATimes);
  const BminTime = Math.min(...BTimes);

  const AminIndex = ATimes.indexOf(AminTime);
  const BminIndex = BTimes.indexOf(BminTime);

  if (AminIndex !== BminIndex) {
    return console.log(Math.max(AminTime, BminTime));
  } else {
    ATimes.splice(AminIndex, 1);
    const AminTime2 = Math.min(...ATimes);
    BTimes.splice(BminIndex, 1);
    const BminTime2 = Math.min(...BTimes);

    const pattern1 = Math.max(AminTime, BminTime2);
    const pattern2 = Math.max(AminTime2, BminTime);
    const pattern3 = AminTime + BminTime;

    return console.log(Math.min(pattern1, pattern2, pattern3));
  }
}