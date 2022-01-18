export const B_092 = (input: string) => {
  const [N, DX, ...aList] = input.trim().split('\n');
  const D = Number(DX.split(' ')[0])
  const X = Number(DX.split(' ')[1])
  let sum = X;
  for (const delta of aList) {
    sum += 1 + Math.floor((D - 1) / +delta);
  }

  console.log(sum);
}