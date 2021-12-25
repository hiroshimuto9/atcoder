export const B_120 = (input: string) => {
  const [A, B, K] = input.trim().split(' ').map(Number);
  const big = A >= B ? A : B;
  let numList = [];
  for (let i = big; i > 0; i--) {
    if (A % i === 0 && B % i === 0) {
      numList.push(i);
    }
  }
  console.log(numList[K-1]);
}