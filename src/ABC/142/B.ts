export const B_142 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const [N, K] = [...inputVal[0].split(' ').map(Number)];
  const hList = [...inputVal[1].split(' ').map(Number)];
  const num = hList.filter((x) => x >= K).length;
  console.log(num);
}