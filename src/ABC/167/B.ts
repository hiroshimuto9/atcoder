export const B_167 = (input: string) => {
  const inputVal = input.trim().split(' ').map(Number);
  const [A, B, C, K] = [...inputVal];
  let output: number;
  if (K >= A) {
    output = A;
    if (K >= A + B) {
      output -= K - A - B;
    }
  } else {
    output = K;
  }
  console.log(output);
}