export const B_141 = (input: string) => {
  const inputValList = [...input.trim()];
  let flg = true;
  for (let i = 0; i < inputValList.length; i++) {
    if (i % 2 === 0) {
      if (inputValList[i] === 'L') {
        flg = false;
        break;
      }
    } else {
      if (inputValList[i] === 'R') {
        flg = false;
        break;
      }
    }
  }
  console.log(flg ? 'Yes' : 'No');
}