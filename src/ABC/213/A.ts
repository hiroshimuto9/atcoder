export const A_213 = (input: string) => {
  const inputVal = input.trim().split(' ');
  const A = +inputVal[0];
  const B = +inputVal[1];
  // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR_assignment
  const output = A ^ B;
  console.log(output);
}