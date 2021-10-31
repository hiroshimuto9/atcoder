export const B_202 = (input: string) => {
  const inputVal = input.trim().split('');
  const reversedInputVal = inputVal.reverse();
  const output = inputVal.map((tmp) => {
    if (tmp === '6') return '9';
    if (tmp === '9') return '6';
    return tmp;
  })
  return console.log(output.join(''));
}