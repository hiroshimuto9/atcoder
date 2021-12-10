export const B_136 = (input: string) => {
  const N = +input.trim();
  let count = 0;
  for (let i = 1; i <= N; i++) {
    if (i >= 1 && i < 10) {
      count++
    }
    if (i >= 100 && i < 1000) {
      count++
    }
    if (i >= 10000 && i < 100000) {
      count++
    }
  }
  console.log(count);
}