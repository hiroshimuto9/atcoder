export const B_129 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const N = +inputVal[0];
  const wList = [...inputVal[1].split(' ').map(Number)];
  const result = [];
  for (let i = 1; i < N; i++) {
    const left = wList.slice(0, i);
    const right = wList.slice(i, N);
    const total1 = left.reduce((a, b) => a + b);
    const total2 = right.reduce((a, b) => a + b);
    result.push(Math.abs(total1 - total2));
  }
  console.log(Math.min(...result));
}