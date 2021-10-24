export const B_214 = (input: string) => {
  const inputVal = input.trim().split(' ');
  const S = +inputVal[0];
  const T = +inputVal[1];
  let count = 0;
  for (let a = 0; a <= S; a++) {
    for (let b = 0; a+b <= S; b++) {
      for (let c = 0; a+b+c <= S; c++) {
        if (a*b*c <= T) count++
      }
    }
  }
  console.log(count);
}