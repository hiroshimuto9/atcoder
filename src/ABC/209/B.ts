export const B_209 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const N = inputVal[0].split(' ')[0];
  const X = inputVal[0].split(' ')[1];
  const priceList = inputVal[1].split(' ').map((x) => +x);
  const totalPrice = priceList.reduce((previousValue, currentValue, index) => {
    if((index+1) % 2 === 0) {
      return previousValue + currentValue - 1;
    } else {
      return previousValue + currentValue;
    }
  });
  console.log(+X >= totalPrice ? "Yes" : "No");
}