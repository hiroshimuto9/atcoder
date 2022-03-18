export const B_033 = (input: string) => {
  const [N, ...SPList] = [...input.trim().split('\n')];
  let max = -Infinity;;
  let townName = '';
  let totalP = 0;
  for (let i = 0; i < +N; i++) {
    const [S, P] =[...SPList[i].split(' ')]
    if (+P > max) {
      max = +P;
      townName = S
    }
    totalP += +P;
  }
  if (max * 2 <= totalP) townName = "atcoder"
  console.log(townName);
}