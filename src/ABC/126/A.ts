export const A_126 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const [N, K] = [...inputVal[0].split(' ').map(Number)];
  const S = [...inputVal[1].split('')];
  const output = S.map((v, i) => {
    if (i === K-1) {
      return v.toLowerCase();
    }
    return v
  }).join('');
  console.log(output);
}