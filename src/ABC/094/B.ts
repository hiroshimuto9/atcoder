export const B_094 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const [N, M, X] = [...inputVal[0].split(' ').map(Number)];
  const aList = [...inputVal[1].split(' ').map(Number)];
  let toStart = 0;
  let toEnd = 0;
  for (let i = X; i > 0; i--) {
    if (aList.includes(i)) toStart++
  }
  for (let i = X; i <= N; i++) {
    if (aList.includes(i)) toEnd++
  }
  console.log(Math.min(toStart, toEnd));
}