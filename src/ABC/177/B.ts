export const B_177 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const S = inputVal[0];
  const T = inputVal[1];

  let min = S.length;
  for (let i = 0; i <= S.length - T.length; i++) {
    let count = 0;
    for (let j = 0; j < T.length; j++) {
      if (S[i+j] != T[j]) {
        count++
      }
    }
    min = Math.min(min, count);
  }
  console.log(min);
}