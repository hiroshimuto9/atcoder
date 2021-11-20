export const A_168 = (input: string) => {
  const inputVal = input.trim().split('');
  const first = +inputVal.slice(-1)[0];
  if (
    first === 2 ||
    first === 4 ||
    first === 5 ||
    first === 7 ||
    first === 9
  ) {
    return console.log('hon');
  } else if (
    first === 0 ||
    first === 1 ||
    first === 6 ||
    first === 8
  ) {
    return console.log('pon');
  } else {
    return console.log('bon');
  }
}