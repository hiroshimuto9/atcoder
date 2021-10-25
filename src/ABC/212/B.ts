export const B_212 = (input: string) => {
  const inputVal = input.trim().split('');
  if(+inputVal[0] === +inputVal[1] && +inputVal[1] === +inputVal[2] && +inputVal[2] === +inputVal[3]) return console.log('Weak');
  let weakFlg = true;
  for(let i = 0; i < inputVal.length - 1; i++) {
    if((+inputVal[i] + 1) % 10 !== (+inputVal[i+1] % 10)) {
      weakFlg = false;
    }
  }
  if(weakFlg) return console.log('Weak');
  return console.log('Strong');
}