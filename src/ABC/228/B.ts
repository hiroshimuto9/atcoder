export const B_228 = (input: string) => {
  const [NX, a] = [...input.trim().split('\n')];
  const [N, X] = [...NX.split(' ').map(Number)]
  const friend = a.split(' ').map(Number)
  const result = friend.map((_) => false);
  let target = X - 1;

  while (!result[target]) {
    result[target] = true;
    target = friend[target] - 1;
  }
  const output = result.reduce((sum, friend) => (sum += friend ? 1 : 0), 0);
  console.log(output);
}