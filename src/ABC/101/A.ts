export const A_101 = (input: string) => {
  const sList = [...input.trim().split('')];
  let num = 0;
  for (let i = 0; i < sList.length; i++) {
    if (sList[i] === '+') {
      num++
    } else {
      num--
    }
  }
  console.log(num);
}