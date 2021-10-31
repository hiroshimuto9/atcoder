export const B_200 = (input: string) => {
  const inputVal = input.trim().split(' ').map(Number);
  let N = inputVal[0];
  const K = inputVal[1];
  for (let i = 0; i < K; i++) {
    if (N % 200 === 0) {
      N = N / 200;
    } else {
      N = Number(`${N}200`);
    }
  }
  return console.log(N);
}