export const B_121 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const [N, M, C] = [...inputVal[0].split(' ').map(Number)];
  const bList = [...inputVal[1].split(' ').map(Number)];
  let count = 0;
  for (let i = 2; i <=N + 1; i++) {
    const list = [...inputVal[i].split(' ').map(Number)];
    const sum = list.map((v, i) => {
      return v * bList[i];
    }).reduce((p, c) => p + c) + C;
    if (sum > 0) count++
  }
  console.log(count);
}