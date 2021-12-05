export const B_143 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const N = +inputVal[0];
  const dList = [...inputVal[1].split(' ').map(Number)];
  let total = 0;
  for (let i = 0; i < N; i++) {
    for (let j = i+1; j < N; j++) {
      total += dList[i] * dList[j]
    }
  }
  console.log(total);
}