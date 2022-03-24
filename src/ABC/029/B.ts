export const B_029 = (input: string) => {
  const sList = [...input.trim().split('\n')];
  let count = 0;
  sList.forEach(s => {
    if (s.includes('r')) {
      count++
    }
  })
  console.log(count);
}