export const A_158 = (input: string) => {
  const inputVal = input.trim().split('');
  if (inputVal.includes('A') && inputVal.includes('B')) {
    return console.log('Yes');
  } else {
    return console.log('No');
  }
}