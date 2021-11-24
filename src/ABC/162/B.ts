export const B_162 = (input: string) => {
  const inputVal = +input.trim();
  let total = 0;
  for (let i = 1; i <= inputVal; i++) {
    if (!(i % 3 === 0 || i % 5 === 0)) {
      total += i;
    }
  }
  console.log(total);
}