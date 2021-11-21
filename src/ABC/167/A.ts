export const A_167 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const S = inputVal[0];
  const T = inputVal[1];
  const T2 = T.substr(0, T.length - 1);
  if (S === T2) {
    return console.log('Yes');
  } else {
    return console.log('No');
  }
}