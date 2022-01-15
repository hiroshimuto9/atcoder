export const A_095 = (input: string) => {
  const sList = [...input.trim().split('')];
  let addPrice = 0;
  sList.forEach(s => {
    if (s === 'o') {
      addPrice += 100;
    }
  })
  console.log(700 + addPrice);
}