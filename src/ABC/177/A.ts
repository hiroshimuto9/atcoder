export const A_177 = (input: string) => {
  const inputVal = input.trim().split(' ').map(Number);
  const [D, T, S] = [...inputVal];
  const time = D / S;
  if (time <= T) {
    return console.log('Yes');
  } else {
    return console.log('No');
  }
}