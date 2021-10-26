export const A_210 = (input: string) => {
  const inputVal = input.trim().split(' ');
  const [N, A, X, Y] = [...inputVal];
  if(+A < +N) {
    const basePaymentAmount = +X * +A;
    const paymentDiscountedAmount = (+N - +A) * +Y;
    const totalPaymentAmount = basePaymentAmount + paymentDiscountedAmount;
    return console.log(totalPaymentAmount);
  } else {
    return console.log(+N * +X);
  }
}