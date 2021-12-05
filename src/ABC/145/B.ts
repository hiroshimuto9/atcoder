export const B_145 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const N = +inputVal[0];
  const S = inputVal[1];
  if (N % 2 !== 0) {
    return console.log('No');
  } else {
    const center = N / 2;
    const T1 = S.substr(0, center)
    const T2 = S.substr(center);
    if (T1 === T2) {
      return console.log('Yes');
    } else {
      return console.log('No');
    }
  }
}