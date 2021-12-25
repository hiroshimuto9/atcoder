export const B_119 = (input: string) => {
  const inputVal = input.trim().split('\n');
  let total = 0
  const N = +inputVal[0];
  for (let i = 1; i <= N; i++) {
    const val = [...inputVal[i].split(' ')];
    if (val[1] === 'BTC') {
      const btcToYen = 380000.0 * +val[0];
      total += btcToYen;
    }
    total += +val[0];
  }
  console.log(total);
}