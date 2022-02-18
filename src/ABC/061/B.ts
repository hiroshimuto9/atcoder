export const B_061 = (input: string) => {
  const [NM, ...aList] = [...input.trim().split('\n')]
  const [N, M] = [...NM.split(' ').map(Number)]
  const array = new Array(N);
  array.fill(0);
  for (let i = 0; i < M; i++) {
    const [a, b] = [...aList[i].split(' ').map(Number)];
    array[a - 1] += 1;
    array[b - 1] += 1;
  }

  console.log(array.join('\n'));
}