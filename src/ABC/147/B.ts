export const B_147 = (input: string) => {
  const inputVal = input.trim().split('');
  let count = 0;
  for (let i = 0; i < inputVal.length/2; i++) {
    if (inputVal[i] !== inputVal[inputVal.length - (i + 1)]) {
      count++
    }
  }
  console.log(count);
}