export const B_161 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const [N, M] = [...inputVal[0].split(' ').map(Number)];
  const voteList = inputVal[1].split(' ').map(Number);
  const total = voteList.reduce((p, c) => p + c);
  const line =  total / (4 * M);
  const overLineCount = voteList.filter((x) => x >= line).length;
  console.log(overLineCount < M ? 'No' : 'Yes');
}