export const B_124 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const N = +inputVal[0];
  const hList = [...inputVal[1].split(' ').map(Number)];
  let count = 1;
  let max = hList[0];
  for (let i = 1; i <= N; i++) {
    if (max <= hList[i]) {
      count++
      max = hList[i];
    }
  }
  console.log(count);
}