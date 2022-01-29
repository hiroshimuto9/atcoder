export const A_081 = (input: string) => {
  const sList = [...input.trim().split('').map(Number)];
  let count = 0;
  sList.forEach(v => {
    if (v === 1) count++
  })
  console.log(count);
}