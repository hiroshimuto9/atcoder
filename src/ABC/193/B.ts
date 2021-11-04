export const B_193 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const N = +inputVal[0];
  let output = -1;
  for(let i = 1; i <= N; i++) {
    const [time, price, stock] = [...inputVal[i].split(' ').map(Number)];
    if (time < stock) {
      if (output === -1) {
        output = price
      } else {
        output = Math.min(output, price);
      }
    }
  }
  return console.log(output);
}