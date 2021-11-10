export const B_180 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const N = +inputVal[0];
  const numList = inputVal[1].split(' ').map(Number);
  const Taxicab = numList.reduce((p, c) => p + Math.abs(c), 0);
  const Euclidean = Math.sqrt(numList.reduce((p, c) => p + Math.pow(Math.abs(c), 2), 0));
  const Chebyshev = Math.max(...numList.map((x) => Math.abs(x)));
  console.log(Taxicab);
  console.log(Euclidean);
  console.log(Chebyshev);
}