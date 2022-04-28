export const A_003 = (input: string) => {
  const N = +input.trim();
  let salary = 0;
  for (let i = 1; i <= N; i++) {
    salary += i * 10000
  }
  console.log(salary/N);
}