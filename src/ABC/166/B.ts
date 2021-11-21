export const B_166 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const [N, K] = [...inputVal[0].split(' ').map(Number)];
  let sunukeList: boolean[] = new Array(N).fill(false);
  for (let i = 2; i <= K * 2; i += 2) {
    inputVal[i].split(' ').map(Number).map((tmp) => {
      sunukeList[tmp - 1] = true
    })
  };
  const count = sunukeList.filter((x) => x === false).length;
  console.log(count);
}