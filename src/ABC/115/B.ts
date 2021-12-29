export const B_115 = (input: string) => {
  const [N, ...pList] = [...input.trim().split('\n').map(Number)];
  const total = pList.sort((a,b) => b - a).map((v, i) => {
    if (i === 0) {
      return v / 2;
    } else {
      return v
    }
  }).reduce((p,c) => p+c);
  console.log(total);
}