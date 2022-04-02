export const A_022 = (input: string) => {
  const [NST, W, ...AList] = [...input.trim().split('\n')];
  const [N, S, T] = [...NST.split(' ').map(Number)];
  let weightList = [+W];
  for(let i = 0; i < N-1; i++) {
    weightList.push(weightList[i] + Number(AList[i]))
  }
  const output = weightList.filter((w) => {
    if (w >= S && w <= T) return w
  }).length
  console.log(output);
}