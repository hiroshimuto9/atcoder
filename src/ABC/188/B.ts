export const B_188 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const N = +inputVal[0];
  const ANumList = [...inputVal[1].split(' ').map(Number)];
  const BNumList = [...inputVal[2].split(' ').map(Number)];
  let sum = 0;
  for (let i = 0; i < N; i++) {
    const tmp = ANumList[i] * BNumList[i];
    sum += tmp;
  }
  const isZero = sum === 0;
  console.log(isZero ? 'Yes' : 'No');
}