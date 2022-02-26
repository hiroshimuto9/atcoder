export const B_050 = (input: string) => {
  const inputVal = [...input.trim().split('\n')];
  const tList = [...inputVal[1].split(' ').map(Number)]
  const M = +inputVal[2]
  let result = [];
  for (let i = 3; i <= 3+M-1; i++) {
    const [p, x] = [...inputVal[i].split(' ').map(Number)]
    const afterTList = tList.map((v, i) => {
      if (i === p-1) {
        return x;
      }
      return v
    })
    const total = afterTList.reduce((p, c) => p+c);
    result.push(total)
  }
  console.log(result.join('\n'));
}