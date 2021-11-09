export const B_181 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const N = +inputVal[0];
  let result = 0;
  for (let i = 1; i <= N; i++) {
    const [A, B] = [...inputVal[i].split(' ').map(Number)]
    result += (B * (B + 1)) / 2
    result -= (A * (A - 1)) / 2
  }
  console.log(result)
}

// 1 以上 x 以下の全ての整数の和は x(x+1) / 2 で求めることができます。
// これを使うと、
// ( A 以上 B 以下の全ての整数の和 ) =
// ( 1 以上 B 以下の全ての整数の和 ) − ( 1 以上 A−1 以下の全ての整数の和 ) =
// B(B+1)/2 − A(A−1)/2
