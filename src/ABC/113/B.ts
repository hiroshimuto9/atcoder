export const B_113 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const [T, A] = [...inputVal[1].split(' ').map(Number)];
  const hList = [...inputVal[2].split(' ').map(Number)];
  const diffList = hList.map(h => T - h * 0.006).map(average => Math.abs(A - average));
  const point = diffList.indexOf(Math.min(...diffList)) + 1;
  console.log(point);
}