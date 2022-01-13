export const B_097 = (input: string) => {
  const X = +input.trim();
  if (X === 1) return console.log(1);
  let result = 0;
  for (let b = 1; b <= X; b++) {
    for (let p = 2; p <= X; p++) {
      const num = b**p;
      if (num <= X && result < num) result = num;
      if (X < num) break;
    }
  }
  console.log(result);
}