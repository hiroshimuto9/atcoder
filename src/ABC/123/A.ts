export const A_123 = (input: string) => {
  const inputVal = [...input.trim().split('\n')];
  let flg = false;
  for (let i = 0; i <= 4; i++) {
    for (let j = i+1; j <= 4; j++) {
      if (Number(inputVal[j]) - Number(inputVal[i]) > Number(inputVal[5])) {
        flg = true;
        break;
      }
    }
  }
  return console.log(flg ? ':(' : 'Yay!');
}