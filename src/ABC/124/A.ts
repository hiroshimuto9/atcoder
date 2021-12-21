export const A_124 = (input: string) => {
  let [A, B] = [...input.trim().split(' ').map(Number)];
  let count = 0;
  for (let i = 1; i <= 2; i++) {
    count += Math.max(A, B);
    if (count === A) {
      A--
    } else {
      B--
    }
  }
  console.log(count);
}