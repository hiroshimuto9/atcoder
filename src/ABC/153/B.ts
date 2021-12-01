export const B_153 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const [H, N] = [...inputVal[0].split(' ').map(Number)];
  const AList = [...inputVal[1].split(' ').map(Number)];
  const sortedAList = AList.sort((a, b) => b - a);
  let remain = H;
  let canBeat: boolean = false;
  for (let i = 0; i < N; i++) {
    remain -= sortedAList[i];
    if (remain <= 0) {
      canBeat = true;
    }
  }
  console.log(canBeat ? 'Yes' : 'No');
}