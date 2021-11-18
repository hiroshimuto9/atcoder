export const B_171 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const [N, K] = [...inputVal[0].split(' ').map(Number)];
  const priceList = [...inputVal[1].split(' ').map(Number)];
  const sortedPriceList = priceList.sort((a, b) => a - b);
  const payPriceList = sortedPriceList.slice(0, K);
  console.log(payPriceList.reduce((p, c) => p + c));
}